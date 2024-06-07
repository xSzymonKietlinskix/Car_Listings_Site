<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include WordPress
    require_once('../../../wp-load.php');

    // Sanitize and store form inputs
    $make = sanitize_text_field($_POST['make']);
    $model = sanitize_text_field($_POST['model']);
    $generation = sanitize_text_field($_POST['generation']);
    $year = intval($_POST['year']);
    $engine_capacity = floatval($_POST['engine_capacity']);
    $engine_power = intval($_POST['engine_power']);
    $price = floatval($_POST['price']);
    $phone = sanitize_text_field($_POST['phone']);
    $description = sanitize_textarea_field($_POST['description']);

    // Handle file upload
    $uploaded_images = array();
    if (!empty($_FILES['photos']['name'])) {
        $files = $_FILES['photos'];
        $upload_dir = wp_upload_dir(); // Get WordPress upload directory
        foreach ($files['name'] as $key => $value) {
            if ($files['name'][$key]) {
                $file = array(
                    'name'     => $files['name'][$key],
                    'type'     => $files['type'][$key],
                    'tmp_name' => $files['tmp_name'][$key],
                    'error'    => $files['error'][$key],
                    'size'     => $files['size'][$key]
                );
                $_FILES = array("photos" => $file); // Prepare files array for WordPress
                $upload_overrides = array('test_form' => false); // Override default file upload settings
                $movefile = wp_handle_upload($_FILES['photos'], $upload_overrides);
                if ($movefile && !isset($movefile['error'])) {
                    $uploaded_images[] = $movefile['url']; // Store uploaded image URL
                } else {
                    echo "Wystąpił błąd podczas przesyłania zdjęcia: " . $movefile['error'];
                }
            }
        }
    }

    // Create new post
    $new_post = array(
        'post_title'    => $make . ' ' . $model,
        'post_content'  => "
            <strong>Marka:</strong> $make<br>
            <strong>Model:</strong> $model<br>
            <strong>Generacja/Wersja:</strong> $generation<br>
            <strong>Rok produkcji:</strong> $year<br>
            <strong>Pojemność silnika:</strong> $engine_capacity<br>
            <strong>Moc silnika:</strong> $engine_power<br>
            <strong>Cena:</strong> $price<br>
            <strong>Numer telefonu:</strong> $phone<br>
            <strong>Opis:</strong><br> $description",
        'post_status'   => 'pending', // Możesz zmienić na 'publish', jeśli chcesz automatycznie publikować wpisy
        'post_type'     => 'post'
    );

    // Insert the post into the database
    $post_id = wp_insert_post($new_post);

    if ($post_id) {
        // Attach uploaded images to the post
        foreach ($uploaded_images as $image_url) {
            $attachment = array(
                'guid'           => $image_url,
                'post_mime_type' => 'image',
                'post_title'     => preg_replace('/\.[^.]+$/', '', basename($image_url)),
                'post_content'   => '',
                'post_status'    => 'inherit'
            );
            $attach_id = wp_insert_attachment($attachment, $image_url, $post_id);
            if (!is_wp_error($attach_id)) {
                require_once(ABSPATH . 'wp-admin/includes/image.php');
                $attach_data = wp_generate_attachment_metadata($attach_id, $image_url);
                wp_update_attachment_metadata($attach_id, $attach_data);
            } else {
                echo "Wystąpił błąd podczas dodawania zdjęcia do wpisu: " . $attach_id->get_error_message();
            }
        }
        echo "Wpis został pomyślnie utworzony.";
    } else {
        echo "Wystąpił błąd podczas tworzenia wpisu.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
?>

