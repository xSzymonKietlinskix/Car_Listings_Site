<?php
// Ładowanie plików WordPressa
require_once('/srv/www/wordpress/wp-load.php');

// Sprawdzenie, czy formularz został przesłany
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pobranie danych z formularza
    $make = sanitize_text_field($_POST['make']);
    $model = sanitize_text_field($_POST['model']);
    $generation = sanitize_text_field($_POST['generation']);
    $year = intval($_POST['year']);
    $engine_capacity = floatval($_POST['engine_capacity']);
    $engine_power = intval($_POST['engine_power']);
    $price = intval($_POST['price']);
    $phone = sanitize_text_field($_POST['phone']);
    $description = sanitize_textarea_field($_POST['description']);

    // Tworzenie nowego wpisu jako wersji roboczej (do zatwierdzenia przez administratora)
    $post_content = 'Marka: ' . $make . "<br>" .
                    'Model: ' . $model . "<br>" .
                    'Generacja/Wersja: ' . $generation . "<br>" .
                    'Rok produkcji: ' . $year . "<br>" .
                    'Pojemność silnika: ' . $engine_capacity . ' L' . "<br>" .
                    'Moc silnika: ' . $engine_power . ' KM' . "<br>" .
                    'Cena: ' . $price . ' PLN' . "<br>" .
                    'Numer telefonu: ' . $phone . "<br>" .
                    'Opis: ' . $description . "<br><br>";
    $post_excerpt =  $price . ' PLN ';
    // Sprawdzenie i dodanie zdjęć, jeśli zostały przesłane
    if (!empty($_FILES['photos']['name'][0])) {
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        require_once(ABSPATH . 'wp-admin/includes/media.php');
        $attachment_ids = array(); // Przechowuje ID załączników
        $files = $_FILES["photos"];
        foreach ($files['name'] as $key => $value) {
            if ($files['name'][$key]) {
                $file = array(
                    'name'     => $files['name'][$key],
                    'type'     => $files['type'][$key],
                    'tmp_name' => $files['tmp_name'][$key],
                    'error'    => $files['error'][$key],
                    'size'     => $files['size'][$key]
                );

                $_FILES = array("upload_file" => $file);
                $attachment_id = media_handle_upload("upload_file", 0);

                if (!is_wp_error($attachment_id)) {
                    // Pobierz URL do załącznika
                    $attachment_url = wp_get_attachment_url($attachment_id);
                    $attachment_ids[] = $attachment_id;
                    // Dodaj zdjęcie do treści wpisu
                    $post_content .= '<img src="' . esc_url($attachment_url) . '" alt="' . esc_attr($file['name']) . '" /><br>';
                } else {
                    // Obsługa błędów przesyłania zdjęć
                    error_log('Błąd przesyłania zdjęcia: ' . $attachment_id->get_error_message());
                }
            }
        }
    }
    // Tworzenie nowego wpisu
    $new_post = array(
        'post_title'    => wp_strip_all_tags($make . ' ' . $model),
	'post_excerpt'  => $post_excerpt, // Dodaj treść zajawki
        'post_content'  => $post_content,
        'post_status'   => 'pending', // Status 'pending' oznacza, że wpis czeka na zatwierdzenie
        'post_type'     => 'post', // Typ wpisu (domyślnie 'post')
    );

    // Wstawienie wpisu do bazy danych
    $post_id = wp_insert_post($new_post);
    // Przekierowanie po wysłaniu formularza (opcjonalnie)
    // wp_redirect(home_url('/dziekujemy/'));
    if (!empty($attachment_ids)) {
        set_post_thumbnail($post_id, $attachment_ids[0]);
    }
    exit;
}
?>
