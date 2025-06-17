# Unicorn Landing

Esta landing page ofrece un formulario de registro para la beta privada de **Unicorn AI**. Incluye una animación interactiva y un sistema de cuenta regresiva. El formulario está preparado para conectarse a Supabase y almacenar los registros.

## Despliegue

1. Clona este repositorio en tu servidor o plataforma de hosting.
2. Asegúrate de servir el archivo `index.html` como página principal.
3. Sube también la imagen `logo transparente.png` para que el logotipo se muestre correctamente.

## Configurar Supabase

1. Crea un proyecto en [Supabase](https://supabase.com/).
2. Copia la URL del proyecto y la clave pública (anon) desde la sección **API**.
3. En `index.html`, busca la sección de configuración de Supabase (comentada en el código) e introduce allí tu URL y tu clave pública.
4. Implementa la lógica de envío para guardar los datos del formulario en tu base de datos de Supabase.

## Ejecutar el formulario en local

No se necesitan dependencias adicionales. Abre `index.html` directamente en tu navegador web favorito y comprueba que el formulario se visualiza correctamente.
