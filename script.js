document.addEventListener('DOMContentLoaded', () => {

    const productsContainer = document.getElementById('products-container');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');

    let cart = [];

    // Definición de productos con categorías
    const products = [
        { id: 'prod001', name: 'Accesorio Genérico 1', price: 20.50, image: "./img/img1.jpg", category: 'accesorios' }, 
        { id: 'prod002', name: 'Cargador de Pared', price: 15.00, image: "./img/img2.jpg", category: 'cargadores' }, 
        { id: 'prod003', name: 'Cable de Carga USB-C', price: 35.25, image: "./img/img3.jpg", category: 'cables' },
        { id: 'prod004', name: 'Funda Transparente iPhone', price: 10.00, image: "./img/img4.jpg", category: 'fundas' },
        { id: 'prod005', name: 'Vidrio Templado Samsung', price: 45.70, image: "./img/img5.jpg", category: 'templados' },
        { id: 'prod006', name: 'Auriculares Inalámbricos', price: 8.50, image: "./img/img6.jpg", category: 'otros' },
        { id: 'prod007', name: 'Soporte de Celular', price: 22.99, image: "./img/img7.jpg", category: 'accesorios' },
        { id: 'prod008', name: 'Cargador Rápido USB', price: 19.80, image: "./img/img8.jpg", category: 'cargadores' },
        { id: 'prod009', name: 'Cable Micro USB', price: 55.00, image: "./img/img9.jpg", category: 'cables' },
        { id: 'prod010', name: 'Funda de Silicona', price: 14.50, image: "./img/img10.jpg", category: 'fundas' },
        { id: 'prod011', name: 'Templado Curvo', price: 28.30, image: "./img/img11.jpg", category: 'templados' },
        { id: 'prod012', name: 'Power Bank', price: 40.00, image: "./img/img12.jpg", category: 'otros' },
        { id: 'prod013', name: 'Anillo de Soporte', price: 17.00, image: "./img/img13.jpg", category: 'accesorios' },
        { id: 'prod014', name: 'Cargador Inalámbrico', price: 9.75, image: "./img/img14.jpg", category: 'cargadores' },
        { id: 'prod015', name: 'Cable HDMI', price: 32.00, image: "./img/img15.jpg", category: 'cables' },
        { id: 'prod016', name: 'Funda con Batería', price: 11.25, image: "./img/img16.jpg", category: 'fundas' },
        { id: 'prod017', name: 'Templado Privacidad', price: 24.50, image: "./img/img17.jpg", category: 'templados' },
        { id: 'prod018', name: 'Selfie Stick', price: 16.99, image: "./img/img18.jpg", category: 'otros' },
        { id: 'prod019', name: 'Adaptador de Audio', price: 5.50, image: "./img/img19.jpg", category: 'accesorios' },
        { id: 'prod020', name: 'Cargador para Auto', price: 29.99, image: "./img/img20.jpg", category: 'cargadores' },
        { id: 'prod021', name: 'Cable USB Extensible', price: 7.00, image: "./img/img21.jpg", category: 'cables' },
        { id: 'prod022', name: 'Funda de Cuero', price: 42.50, image: "./img/img22.jpg", category: 'fundas' },
        { id: 'prod023', name: 'Templado Cerámico', price: 13.00, image: "./img/img23.jpg", category: 'templados' },
        { id: 'prod024', name: 'Soporte para Anillo', price: 21.50, image: "./img/img24.jpg", category: 'otros' },
        { id: 'prod025', name: 'Lector de Tarjetas', price: 18.00, image: "./img/img25.jpg", category: 'accesorios' },
        { id: 'prod026', name: 'Cargador Portátil', price: 26.75, image: "./img/img26.jpg", category: 'cargadores' },
        { id: 'prod027', name: 'Cable Lightning', price: 9.50, image: "./img/img27.jpg", category: 'cables' },
        { id: 'prod028', name: 'Funda Antigolpes', price: 38.00, image: "./img/img28.jpg", category: 'fundas' },
        { id: 'prod029', name: 'Templado Antihuellas', price: 11.00, image: "./img/img29.jpg", category: 'templados' },
        { id: 'prod030', name: 'Altavoz Portátil', price: 23.50, image: "./img/img30.jpg", category: 'otros' },
        { id: 'prod031', name: 'Grip de Teléfono', price: 16.25, image: "./img/img31.jpg", category: 'accesorios' },
        { id: 'prod032', name: 'Base de Carga Inalámbrica', price: 31.00, image: "./img/img32.jpg", category: 'cargadores' },
        { id: 'prod033', name: 'Cable USB-C a USB-C', price: 14.00, image: "./img/img33.jpg", category: 'cables' },
        { id: 'prod034', name: 'Funda con Diseño', price: 25.99, image: "./img/img34.jpg", category: 'fundas' },
        { id: 'prod035', name: 'Templado Mate', price: 7.50, image: "./img/img35.jpg", category: 'templados' },
        { id: 'prod036', name: 'Lente para Móvil', price: 48.00, image: "./img/img36.jpg", category: 'otros' },
        { id: 'prod037', name: 'Soporte para Bicicleta', price: 12.50, image: "./img/img37.jpg", category: 'accesorios' },
        { id: 'prod038', name: 'Cargador con Múltiples Puertos', price: 29.00, image: "./img/img38.jpg", category: 'cargadores' },
        { id: 'prod039', name: 'Cable de Audio', price: 17.75, image: "./img/img39.jpg", category: 'cables' },
        { id: 'prod040', name: 'Funda de Gel', price: 33.50, image: "./img/img40.jpg", category: 'fundas' },
        { id: 'prod041', name: 'Templado 9H', price: 10.50, image: "./img/img41.jpg", category: 'templados' },
        { id: 'prod042', name: 'Adaptador de Tarjeta SIM', price: 27.00, image: "./img/img42.jpg", category: 'otros' },
        { id: 'prod043', name: 'Adaptador USB OTG', price: 19.00, image: "./img/img43.jpg", category: 'accesorios' },
        { id: 'prod044', name: 'Cargador de Viaje', price: 39.99, image: "./img/img44.jpg", category: 'cargadores' },
        { id: 'prod045', name: 'Cable de Datos', price: 6.50, image: "./img/img45.jpg", category: 'cables' },
        { id: 'prod046', name: 'Funda con Soporte', price: 47.00, image: "./img/img46.jpg", category: 'fundas' },
        { id: 'prod047', name: 'Templado Anti Luz Azul', price: 13.25, image: "./img/img47.jpg", category: 'templados' },
        { id: 'prod048', name: 'Controlador de Juegos', price: 24.00, image: "./img/img48.jpg", category: 'otros' },
        { id: 'prod049', name: 'Soporte Magnético', price: 18.50, image: "./img/img49.jpg", category: 'accesorios' },
        { id: 'prod050', name: 'Cargador Solar', price: 30.00, image: "./img/img50.jpg", category: 'cargadores' },
        { id: 'prod051', name: 'Cable Plano', price: 9.00, image: "./img/img51.jpg", category: 'cables' },
        { id: 'prod052', name: 'Funda Rígida', price: 26.50, image: "./img/img52.jpg", category: 'fundas' },
        { id: 'prod053', name: 'Templado para Cámara', price: 15.75, image: "./img/img53.jpg", category: 'templados' },
        { id: 'prod054', name: 'Limpiador de Pantalla', price: 21.00, image: "./img/img54.jpg", category: 'otros' },
        { id: 'prod055', name: 'Auriculares con Cable', price: 12.00, image: "./img/img55.jpg", category: 'accesorios' },
        { id: 'prod056', name: 'Hub de Carga USB', price: 34.00, image: "./img/img56.jpg", category: 'cargadores' },
        { id: 'prod057', name: 'Cable de Sincronización', price: 17.50, image: "./img/img57.jpg", category: 'cables' },
        { id: 'prod058', name: 'Funda de Silicona', price: 28.00, image: "./img/img58.jpg", category: 'fundas' },
        { id: 'prod059', name: 'Templado Anti-rayas', price: 10.99, image: "./img/img59.jpg", category: 'templados' },
        { id: 'prod060', name: 'Trípode Flexible', price: 49.00, image: "./img/img60.jpg", category: 'otros' },
        { id: 'prod061', name: 'Adaptador de Red', price: 6.00, image: "./img/img61.jpg", category: 'accesorios' },
        { id: 'prod062', name: 'Cargador de Inducción', price: 41.50, image: "./img/img62.jpg", category: 'cargadores' },
        { id: 'prod063', name: 'Cable para Auriculares', price: 13.75, image: "./img/img63.jpg", category: 'cables' },
        { id: 'prod064', name: 'Funda de Doble Capa', price: 20.00, image: "./img/img64.jpg", category: 'fundas' },
        { id: 'prod065', name: 'Templado de Zafiro', price: 15.00, image: "./img/img65.jpg", category: 'templados' },
        { id: 'prod066', name: 'Cable Organizador', price: 27.50, image: "./img/img66.jpg", category: 'otros' },
        { id: 'prod067', name: 'Soporte para Coche', price: 9.25, image: "./img/img67.jpg", category: 'accesorios' },
        { id: 'prod068', name: 'Cargador Portátil', price: 36.00, image: "./img/img68.jpg", category: 'cargadores' },
        { id: 'prod069', name: 'Cable Reforzado', price: 11.50, image: "./img/img69.jpg", category: 'cables' },
        { id: 'prod070', name: 'Funda para Móvil', price: 25.00, image: "./img/img70.jpg", category: 'fundas' },
        { id: 'prod071', name: 'Templado Anti-luz', price: 18.25, image: "./img/img71.jpg", category: 'templados' },
        { id: 'prod072', name: 'Guantes Táctiles', price: 32.50, image: "./img/img72.jpg", category: 'otros' },
        { id: 'prod073', name: 'Protector de Lente', price: 10.00, image: "./img/img73.jpg", category: 'accesorios' },
        { id: 'prod074', name: 'Cargador con Display', price: 44.00, image: "./img/img74.jpg", category: 'cargadores' },
        { id: 'prod075', name: 'Cable Tipo C', price: 7.00, image: "./img/img75.jpg", category: 'cables' },
        { id: 'prod076', name: 'Funda de Piel', price: 52.00, image: "./img/img76.jpg", category: 'fundas' },
        { id: 'prod077', name: 'Templado para Tablet', price: 16.00, image: "./img/img77.jpg", category: 'templados' },
        { id: 'prod078', name: 'Adaptador de Viaje', price: 29.50, image: "./img/img78.jpg", category: 'otros' },
        { id: 'prod079', name: 'Soporte para Escritorio', price: 14.25, image: "./img/img79.jpg", category: 'accesorios' },
        { id: 'prod080', name: 'Cargador con USB', price: 37.50, image: "./img/img80.jpg", category: 'cargadores' },
        { id: 'prod081', name: 'Cable de Nylon', price: 12.75, image: "./img/img81.jpg", category: 'cables' },
        { id: 'prod082', name: 'Funda con Tarjetero', price: 24.99, image: "./img/img82.jpg", category: 'fundas' },
        { id: 'prod083', name: 'Templado Flexible', price: 8.75, image: "./img/img83.jpg", category: 'templados' },
        { id: 'prod084', name: 'Cargador de Batería', price: 46.00, image: "./img/img84.jpg", category: 'otros' },
        { id: 'prod085', name: 'Soporte de Anillo', price: 15.50, image: "./img/img85.jpg", category: 'accesorios' },
        { id: 'prod086', name: 'Cargador Doble USB', price: 28.50, image: "./img/img86.jpg", category: 'cargadores' },
        { id: 'prod087', name: 'Cable Trenzado', price: 19.00, image: "./img/img87.jpg", category: 'cables' },
        { id: 'prod088', name: 'Funda con Bordes', price: 33.00, image: "./img/img88.jpg", category: 'fundas' },
        { id: 'prod089', name: 'Templado para Smartwatch', price: 10.00, image: "./img/img89.jpg", category: 'templados' },
        { id: 'prod090', name: 'Auriculares de Diadema', price: 22.50, image: "./img/img90.jpg", category: 'otros' },
        { id: 'prod091', name: 'Adaptador USB', price: 16.75, image: "./img/img91.jpg", category: 'accesorios' },
        { id: 'prod092', name: 'Cargador de Coche', price: 30.50, image: "./img/img92.jpg", category: 'cargadores' },
        { id: 'prod093', name: 'Cable de Carga Magnético', price: 14.00, image: "./img/img93.jpg", category: 'cables' },
        { id: 'prod094', name: 'Funda de Diseño', price: 26.00, image: "./img/img94.jpg", category: 'fundas' },
        { id: 'prod095', name: 'Templado Anti-grasa', price: 9.50, image: "./img/img95.jpg", category: 'templados' },
        { id: 'prod096', name: 'Soporte de Trípode', price: 40.00, image: "./img/img96.jpg", category: 'otros' },
        { id: 'prod097', name: 'Cable Auxiliar', price: 11.00, image: "./img/img97.jpg", category: 'accesorios' },
        { id: 'prod098', name: 'Cargador Portátil', price: 24.50, image: "./img/img98.jpg", category: 'cargadores' },
        { id: 'prod099', name: 'Cable para iPhone', price: 18.00, image: "./img/img99.jpg", category: 'cables' },
        { id: 'prod100', name: 'Funda Antigolpes', price: 35.00, image: "./img/img100.jpg", category: 'fundas' },
        { id: 'prod101', name: 'Templado para Tablet', price: 13.50, image: "./img/img101.jpg", category: 'templados' },
        { id: 'prod102', name: 'Batería Externa', price: 27.00, image: "./img/img102.jpg", category: 'otros' },
        { id: 'prod103', name: 'Soporte para Coche', price: 10.75, image: "./img/img103.jpg", category: 'accesorios' },
        { id: 'prod104', name: 'Cargador Rápido', price: 41.00, image: "./img/img104.jpg", category: 'cargadores' },
        { id: 'prod105', name: 'Cable de Datos', price: 8.00, image: "./img/img105.jpg", category: 'cables' },
        { id: 'prod106', name: 'Funda de Piel', price: 50.00, image: "./img/img106.jpg", category: 'fundas' },
        { id: 'prod107', name: 'Templado 3D', price: 17.00, image: "./img/img107.jpg", category: 'templados' },
        { id: 'prod108', name: 'Trípode Móvil', price: 29.99, image: "./img/img108.jpg", category: 'otros' },
        { id: 'prod109', name: 'Adaptador de Viaje', price: 15.00, image: "./img/img109.jpg", category: 'accesorios' },
        { id: 'prod110', name: 'Cargador USB-C', price: 32.00, image: "./img/img110.jpg", category: 'cargadores' },
        { id: 'prod111', name: 'Cable Reforzado', price: 11.00, image: "./img/img111.jpg", category: 'cables' },
        { id: 'prod112', name: 'Funda con Diseño', price: 24.00, image: "./img/img112.jpg", category: 'fundas' },
        { id: 'prod113', name: 'Templado Curvo', price: 19.50, image: "./img/img113.jpg", category: 'templados' },
        { id: 'prod114', name: 'Auriculares Bluetooth', price: 38.00, image: "./img/img114.jpg", category: 'otros' },
        { id: 'prod115', name: 'Lector de Tarjetas', price: 6.50, image: "./img/img115.jpg", category: 'accesorios' },
        { id: 'prod116', name: 'Cargador de Pared', price: 45.00, image: "./img/img116.jpg", category: 'cargadores' },
        { id: 'prod117', name: 'Cable USB', price: 12.00, image: "./img/img117.jpg", category: 'cables' },
        { id: 'prod118', name: 'Funda Transparente', price: 23.00, image: "./img/img118.jpg", category: 'fundas' },
        { id: 'prod119', name: 'Templado Protector', price: 16.00, image: "./img/img119.jpg", category: 'templados' },
        { id: 'prod120', name: 'Batería para Móvil', price: 31.00, image: "./img/img120.jpg", category: 'otros' },
        { id: 'prod121', name: 'Soporte de Escritorio', price: 9.99, image: "./img/img121.jpg", category: 'accesorios' },
        { id: 'prod122', name: 'Cargador de Inducción', price: 28.50, image: "./img/img122.jpg", category: 'cargadores' },
        { id: 'prod123', name: 'Cable USB', price: 14.50, image: "./img/img123.jpg", category: 'cables' },
        { id: 'prod124', name: 'Funda con Batería', price: 34.50, image: "./img/img124.jpg", category: 'fundas' },
        { id: 'prod125', name: 'Templado Antihuellas', price: 18.50, image: "./img/img125.jpg", category: 'templados' },
        { id: 'prod126', name: 'Altavoz Portátil', price: 26.00, image: "./img/img126.jpg", category: 'otros' },
        { id: 'prod127', name: 'Adaptador de Audio', price: 10.00, image: "./img/img127.jpg", category: 'accesorios' },
        { id: 'prod128', name: 'Cargador para Coche', price: 42.00, image: "./img/img128.jpg", category: 'cargadores' },
        { id: 'prod129', name: 'Cable de Carga', price: 13.00, image: "./img/img129.jpg", category: 'cables' },
        { id: 'prod130', name: 'Funda Transparente', price: 21.00, image: "./img/img130.jpg", category: 'fundas' },
        { id: 'prod131', name: 'Templado de Privacidad', price: 17.75, image: "./img/img131.jpg", category: 'templados' },
        { id: 'prod132', name: 'Controlador de Juegos', price: 39.00, image: "./img/img132.jpg", category: 'otros' },
        { id: 'prod133', name: 'Soporte de Celular', price: 9.00, image: "./img/img133.jpg", category: 'accesorios' },
        { id: 'prod134', name: 'Cargador de Pared', price: 48.00, image: "./img/img134.jpg", category: 'cargadores' },
        { id: 'prod135', name: 'Cable Auxiliar', price: 7.00, image: "./img/img135.jpg", category: 'cables' },
        { id: 'prod136', name: 'Funda de Cuero', price: 55.00, image: "./img/img136.jpg", category: 'fundas' },
        { id: 'prod137', name: 'Templado Mate', price: 15.00, image: "./img/img137.jpg", category: 'templados' },
        { id: 'prod138', name: 'Lente para Cámara', price: 22.00, image: "./img/img138.jpg", category: 'otros' },
        { id: 'prod139', name: 'Soporte Magnético', price: 11.50, image: "./img/img139.jpg", category: 'accesorios' },
        { id: 'prod140', name: 'Cargador Portátil', price: 29.00, image: "./img/img140.jpg", category: 'cargadores' },
        { id: 'prod141', name: 'Cable USB-C', price: 16.50, image: "./img/img141.jpg", category: 'cables' },
        { id: 'prod142', name: 'Funda Rígida', price: 33.00, image: "./img/img142.jpg", category: 'fundas' },
        { id: 'prod143', name: 'Templado Completo', price: 8.50, image: "./img/img143.jpg", category: 'templados' },
        { id: 'prod144', name: 'Audífonos Bluetooth', price: 40.00, image: "./img/img144.jpg", category: 'otros' },
        { id: 'prod145', name: 'Adaptador de Audio', price: 13.25, image: "./img/img145.jpg", category: 'accesorios' },
        { id: 'prod146', name: 'Cargador de Auto', price: 25.50, image: "./img/img146.jpg", category: 'cargadores' },
        { id: 'prod147', name: 'Cable Lightning', price: 19.00, image: "./img/img147.jpg", category: 'cables' },
        { id: 'prod148', name: 'Funda de Silicona', price: 36.00, image: "./img/img148.jpg", category: 'fundas' },
        { id: 'prod149', name: 'Templado de Pantalla', price: 10.50, image: "./img/img149.jpg", category: 'templados' },
        { id: 'prod150', name: 'Correa para Reloj', price: 23.00, image: "./img/img150.jpg", category: 'otros' },
        { id: 'prod151', name: 'Adaptador USB-C', price: 15.75, image: "./img/img151.jpg", category: 'accesorios' },
        { id: 'prod152', name: 'Cargador Inalámbrico', price: 27.50, image: "./img/img152.jpg", category: 'cargadores' },
        { id: 'prod153', name: 'Cable de Carga', price: 12.00, image: "./img/img153.jpg", category: 'cables' },
        { id: 'prod154', name: 'Funda con Bordes', price: 31.00, image: "./img/img154.jpg", category: 'fundas' },
        { id: 'prod155', name: 'Templado 9H', price: 9.25, image: "./img/img155.jpg", category: 'templados' },
        { id: 'prod156', name: 'Soporte de Coche', price: 44.00, image: "./img/img156.jpg", category: 'otros' },
        { id: 'prod157', name: 'Soporte de Anillo', price: 17.00, image: "./img/img157.jpg", category: 'accesorios' },
        { id: 'prod158', name: 'Cargador Portátil', price: 29.99, image: "./img/img158.jpg", category: 'cargadores' },
        { id: 'prod159', name: 'Cable de Nylon', price: 14.50, image: "./img/img159.jpg", category: 'cables' },
        { id: 'prod160', name: 'Funda con Diseño', price: 32.00, image: "./img/img160.jpg", category: 'fundas' },
        { id: 'prod161', name: 'Templado Curvo', price: 11.00, image: "./img/img161.jpg", category: 'templados' },
        { id: 'prod162', name: 'Limpiador de Pantalla', price: 24.00, image: "./img/img162.jpg", category: 'otros' },
        { id: 'prod163', name: 'Adaptador de Audio', price: 19.50, image: "./img/img163.jpg", category: 'accesorios' },
        { id: 'prod164', name: 'Cargador USB', price: 38.00, image: "./img/img164.jpg", category: 'cargadores' },
        { id: 'prod165', name: 'Cable de Datos', price: 6.50, image: "./img/img165.jpg", category: 'cables' },
        { id: 'prod166', name: 'Funda de Gel', price: 45.00, image: "./img/img166.jpg", category: 'fundas' },
        { id: 'prod167', name: 'Templado Anti Luz Azul', price: 12.00, image: "./img/img167.jpg", category: 'templados' },
        { id: 'prod168', name: 'Selfie Stick', price: 23.00, image: "./img/img168.jpg", category: 'otros' },
        { id: 'prod169', name: 'Soporte Magnético', price: 16.00, image: "./img/img169.jpg", category: 'accesorios' },
        { id: 'prod170', name: 'Cargador de Pared', price: 31.00, image: "./img/img170.jpg", category: 'cargadores' },
        { id: 'prod171', name: 'Cable Extensible', price: 9.99, image: "./img/img171.jpg", category: 'cables' },
        { id: 'prod172', name: 'Funda de Silicona', price: 28.50, image: "./img/img172.jpg", category: 'fundas' },
        { id: 'prod173', name: 'Templado Cerámico', price: 14.50, image: "./img/img173.jpg", category: 'templados' },
        { id: 'prod174', name: 'Auriculares Inalámbricos', price: 34.50, image: "./img/img174.jpg", category: 'otros' },
        { id: 'prod175', name: 'Lector de Tarjetas', price: 18.50, image: "./img/img175.jpg", category: 'accesorios' },
        { id: 'prod176', name: 'Cargador Portátil', price: 26.00, image: "./img/img176.jpg", category: 'cargadores' },
        { id: 'prod177', name: 'Cable de Carga', price: 10.00, image: "./img/img177.jpg", category: 'cables' },
        { id: 'prod178', name: 'Funda Antigolpes', price: 42.00, image: "./img/img178.jpg", category: 'fundas' },
        { id: 'prod179', name: 'Templado Flexible', price: 13.00, image: "./img/img179.jpg", category: 'templados' },
        { id: 'prod180', name: 'Power Bank', price: 21.00, image: "./img/img180.jpg", category: 'otros' }
    ];

    // Función principal para filtrar y ordenar productos
    function updateProducts() {
        let filteredProducts = [...products]; // Hacemos una copia para no modificar el array original

        // 1. Filtrar por categoría
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // 2. Ordenar por precio
        const sortOption = sortFilter.value;
        if (sortOption === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        // 3. Renderizar los productos filtrados y ordenados
        renderProducts(filteredProducts);
    }

    // Función para renderizar los productos en la página
    function renderProducts(productsToRender) {
        productsContainer.innerHTML = '';
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button data-id="${product.id}">Agregar al Carrito</button>
            `;
            productsContainer.appendChild(productCard);
        });

        document.querySelectorAll('.product-card button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                addToCart(productId);
            });
        });
    }

    // Funciones del carrito (sin cambios significativos)
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1, price: product.price });
            }
            updateCart();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="cart-item-info">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button class="remove-from-cart" data-id="${item.id}">X</button>
            `;
            cartList.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
        
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                removeFromCart(productId);
            });
        });
    }

    // Listener para el botón de WhatsApp
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Tu carrito está vacío. Agrega productos para continuar.');
            return;
        }

        const phoneNumber = '5491139411105';
        let message = '¡Hola! Me gustaría hacer un pedido con los siguientes productos:\n\n';
        cart.forEach(item => {
            message += `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
        });
        message += `\nTotal: $${totalPriceElement.textContent}`;
        message += '\n\nPor favor, dame los pasos a seguir para completar la compra.';

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Escuchar cambios en los filtros para actualizar la vista
    categoryFilter.addEventListener('change', updateProducts);
    sortFilter.addEventListener('change', updateProducts);

    // Renderizar productos al cargar la página
    updateProducts();
});