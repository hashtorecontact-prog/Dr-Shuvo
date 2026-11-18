<?php
/**
 * Lightweight cPanel PHP Contact Form Handler
 * Place inside public_html alongside the Vite dist build, and configure
 * VITE_CONTACT_ENDPOINT="./contact.php" before running npm run build.
 */

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Configure the clinic recipient email address on your cPanel server
$recipientEmail = 'appointments@yourdomain.com';
$fromEmail = 'noreply@yourdomain.com';

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot check
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim(strip_tags((string)($data['name'] ?? '')));
$phone = trim(strip_tags((string)($data['phone'] ?? '')));
$preferredDate = trim(strip_tags((string)($data['preferredDate'] ?? '')));
$message = trim(strip_tags((string)($data['message'] ?? '')));
$language = trim(strip_tags((string)($data['language'] ?? 'bn')));

if (mb_strlen($name) < 2 || mb_strlen($phone) < 10 || empty($preferredDate) || mb_strlen($message) < 5) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid form input']);
    exit;
}

$subject = "New Appointment Inquiry: {$name} ({$preferredDate})";
$body = "Ashik Orthopedic, Sports Injury & Pain Clinic — Appointment Inquiry\n\n"
    . "Patient Name: {$name}\n"
    . "Phone Number: {$phone}\n"
    . "Preferred Date: {$preferredDate}\n"
    . "Language: {$language}\n\n"
    . "Message:\n{$message}\n\n"
    . "Note: This inquiry was submitted via the website form and requires phone confirmation.\n";

$headers = "From: Clinic Website <{$fromEmail}>\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($recipientEmail, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery unavailable']);
}
