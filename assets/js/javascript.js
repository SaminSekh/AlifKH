// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navSidebar = document.getElementById('navSidebar');
const closeNav = document.getElementById('closeNav');

function toggleNav() {
    navSidebar.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);

// Update setupEventListeners to include navigation links closing the sidebar
function setupEventListeners() {
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            displayMenuItems();
        });
    });
    
    searchInput.addEventListener('input', displayMenuItems);
    
    applyDiscountBtn.addEventListener('click', applyDiscount);
    discountCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            applyDiscount();
        }
    });
    
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        toggleCart();
        orderModal.classList.add('active');
    });
    
    orderOptions.forEach(option => {
        option.addEventListener('click', function() {
            orderOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedOrderMethod = this.getAttribute('data-method');
        });
    });
    
    confirmOrder.addEventListener('click', function() {
        if (!selectedOrderMethod) {
            alert('Please select an order method');
            return;
        }
        
        sendOrder(selectedOrderMethod);
        orderModal.classList.remove('active');
        successModal.classList.add('active');
        
        cart = [];
        appliedDiscount = 0;
        appliedDiscountCode = '';
        updateCart();
        saveCartToStorage();
    });
    
    closeSuccess.addEventListener('click', function() {
        successModal.classList.remove('active');
    });

    // Add click event to navigation links to close sidebar
    document.querySelectorAll('.nav-sidebar ul li a').forEach(link => {
        link.addEventListener('click', toggleNav);
    });
}
        
        
        
        
              const menuItems = [

            { id: 1, name: "Pani puri/ Fuchka (10pcs)", category: "fastfood", price: 2.5, originalPrice: 4, discount: 63, description: "Crispy hollow puris filled with tamarind water, chickpeas, and potatoes. One-bite snack bursting with tangy, spicy flavors. Served with extra flavored water for a customizable street treat.", image: "https://www.seema.com/wp-content/uploads/2022/08/Pani-Poori.jpg" },

            { id: 2, name: "Pani puri/ Fuchka (50pcs)", category: "fastfood", price: 10, originalPrice: 20, discount: 50, description: "Larger serving of crispy puris with tangy tamarind water and fillings. Perfect for sharing, offering a mix of sweet, sour, and spicy tastes with chutneys and mashed potatoes.", image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pani_puri_90458_16x9.jpg" },

            { id: 3, name: "Dal Puri (4pcs)", category: "fastfood", price: 2.7, originalPrice: 4, discount: 68, description: "Deep-fried flatbreads stuffed with spiced lentil filling. Crispy outside and soft inside, served with chutney or spicy curry for a savory, satisfying snack.", image: "https://www.salmathechef.com/fileadmin/user_upload/66426523_384937842159724_1394540683754209280_o.jpg" },

            { id: 4, name: "Jhal Muri", category: "fastfood", price: 1, originalPrice: 2, discount: 50, description: "Puffed rice mixed with spices, onions, chilies, and peanuts. A light, crunchy snack with tangy, spicy flavors, served in paper cones for easy street-side eating.", image: "https://southindianfoods.in/recipe_picture_enlarge/jhal-muri-masala-puffed-rice.jpg" },

            { id: 5, name: "Special Jhal Muri (curry)", category: "fastfood", price: 1.5, originalPrice: 3, discount: 50, description: "Puffed rice tossed with curry-flavored spices, vegetables, and tangy chutneys. Offers a bolder, richer taste than regular jhal muri, served fresh in a cone or bowl.", image: "https://www.whiskaffair.com/wp-content/uploads/2020/10/Jhal-Muri-2-3.jpg" },

            { id: 6, name: "Alur chop (5pcs)", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Spiced mashed potato patties coated in gram flour batter and deep-fried. Crispy outside, soft inside, served with tamarind chutney or ketchup for a popular street snack.", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/%E0%A6%86%E0%A6%B2%E0%A7%81%E0%A6%B0_%E0%A6%9A%E0%A6%AA.jpg" },

            { id: 7, name: "Piayaju (5pcs)", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Lentil fritters with onions, chilies, and spices, deep-fried until crunchy. A savory Bangladeshi favorite, often enjoyed with tea or spicy chutney.", image: "https://tastycookingblog.com/wp-content/uploads/2024/10/piaju.jpg" },

            { id: 8, name: "Beguni (5pcs)", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Thinly sliced eggplant coated in gram flour batter and deep-fried. Crispy, flavorful, and spiced with turmeric and chili for a tasty snack or side dish.", image: "https://yummyfoodmadeeasy.wordpress.com/wp-content/uploads/2012/08/img_2127.jpg" },

            { id: 9, name: "Chola Makha", category: "fastfood", price: 1, originalPrice: 2, discount: 50, description: "Boiled chickpeas mixed with onions, chilies, and tangy spices. A light, refreshing snack garnished with coriander and lemon for extra zing.", image: "https://img-global.cpcdn.com/recipes/7bc2a0cb09f12aba/680x781cq80/4-min-chola-makha-or-black-chana-chaat-recipe-main-photo.jpg" },

            { id: 10, name: "Special Chola Makha", category: "fastfood", price: 1.5, originalPrice: 3.5, discount: 43, description: "Chola makha upgrade with extra spices, boiled egg, or meat pieces. Richer, heartier flavor with tamarind or yogurt, served with puffed rice toppings.", image: "https://i.ytimg.com/vi/XYDm2EuOAL8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6I1uEEZYTMNjPoFLlu3_PMhIc0g" },

            { id: 11, name: "Egg Roll", category: "fastfood", price: 1.5, originalPrice: 3, discount: 50, description: "Paratha wrapped around a spiced egg omelet with onions and sauces. Hot, savory, and satisfying, served with ketchup or spicy chutney.", image: "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG" },

            { id: 12, name: "Premium Egg Roll", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Egg roll enhanced with cheese, chicken, or premium sauces. Thicker paratha and richer fillings create a flavorful, filling street snack.", image: "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/anz/calcmenu/recipe/killer-recipes-update/californian-egg-roll-main-header-anz.jpg" },

            { id: 13, name: "Chicken Roll", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Paratha rolled with spiced grilled chicken, onions, and tangy sauces. Hearty and flavorful, often sprinkled with chaat masala.", image: "https://madscookhouse.com/wp-content/uploads/2021/02/Chicken-Kathi-Roll-500x375.jpg" },

            { id: 14, name: "Chow Mein (Egg)", category: "fastfood", price: 2, originalPrice: 3.5, discount: 57, description: "Stir-fried noodles with vegetables, soy sauce, and spices. A South Asian street food favorite, served hot and garnished with spring onions or chili sauce.", image: "https://takestwoeggs.com/wp-content/uploads/2025/05/Cantonese-Chow-Mein-noodle-pull.jpg" },

            { id: 15, name: "Premium Chow Mein (Chicken)", category: "fastfood", price: 2.5, originalPrice: 5, discount: 50, description: "Chow mein with shrimp, chicken, or extra vegetables. Rich sauces and premium ingredients give this version a deeper, more complex flavor.", image: "https://chefjar.com/wp-content/uploads/2024/09/chicken-chow-mein-1.jpg" },

            { id: 16, name: "Egg Toast (2pcs)", category: "fastfood", price: 2, originalPrice: 4, discount: 50, description: "Bread topped with spiced egg mixture, fried or toasted until golden. A quick, savory breakfast or snack served with ketchup or chutney.", image: "https://images.heb.com/is/image/HEBGrocery/Test/sunny-side-egg-in-toast-recipe.jpg" },

            { id: 17, name: "Burger", category: "fastfood", price: 2, originalPrice: 4, discount: 50, description: "Bun stuffed with spiced meat or veggie patty, lettuce, and sauces. South Asian burgers feature local spices and chutneys for a unique flavor twist.", image: "https://www.francoislambert.one/cdn/shop/articles/mac_poulet_corn_flakes.webp?v=1723557298&width=1100" },

            { id: 18, name: "Special Burger", category: "fastfood", price: 2.5, originalPrice: 6, discount: 42, description: "Burger with cheese, egg, or grilled meat, enhanced with bold sauces and spices. A hearty, satisfying fast food option.", image: "https://www.datocms-assets.com/129288/1725393944-moist-chicken-burgers.jpg" },

            { id: 19, name: "Paratha (2 pcs)", category: "fastfood", price: 1.5, originalPrice: 2, discount: 75, description: "Layered, flaky flatbread cooked with ghee or oil. Soft yet crispy, perfect with curries or eaten alone as a snack.", image: "https://vegehomecooking.com/wp-content/uploads/2024/08/TriangleParathaFeaturedImage.jpg" },

            { id: 20, name: "Mughlai with Potato curry", category: "fastfood", price: 2, originalPrice: 3, discount: 67, description: "Rich, creamy potato/chicken dish cooked in spiced gravy. A Mughal-inspired indulgence served with naan or paratha and garnished with herbs.", image: "https://machhlibabafries.com/wp-content/uploads/MuttonMughlaiParatha.jpg" },

            { id: 21, name: "Chatpati", category: "fastfood", price: 1, originalPrice: 2.5, discount: 40, description: "Tangy mix of chickpeas, onions, chilies, and tamarind sauce. A zesty Bangladeshi chaat-style snack garnished with coriander or crunchy sev.", image: "https://img-global.cpcdn.com/recipes/71b1c35259310cb4/680x781cq80/fry-chatpati-chaat-recipe-main-photo.jpg" },

            { id: 25, name: "Rice / Vat (1 person)", category: "meals", price: 0.8, originalPrice: 1.5, discount: 53, description: "Steamed plain rice, lightly spiced or plain. A versatile staple served hot with curries, dal, or vegetables for a balanced meal.", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/basmati-rice-recipe.jpg" },

            { id: 26, name: "Roti", category: "meals", price: 0.4, originalPrice: 1, discount: 0, description: "Soft, round flatbread made from wheat flour, lightly roasted on a griddle. A versatile staple served with curries, vegetables, or lentils, perfect for breakfast, lunch, or dinner.", image: "https://maple.kitchen/wp-content/uploads/2024/09/ready-to-eat-roti-750x422-1.webp" },

            { id: 27, name: "Mosur Dal", category: "meals", price: 0.7, originalPrice: 1, discount: 70, description: "Red lentil curry with turmeric, onions, and mild spices. Protein-rich, comforting, and perfect with rice or flatbread.", image: "https://www.whiskaffair.com/wp-content/uploads/2021/02/Bengali-Masoor-Dal-2-3.jpg" },

            { id: 28, name: "Vegetable", category: "meals", price: 0.8, originalPrice: 2, discount: 40, description: "Mixed vegetables cooked with cumin, turmeric, and coriander. A healthy side dish served with rice or paratha.", image: "https://greenbowl2soul.com/wp-content/uploads/2021/06/Indian-vegetable-curry.jpg" },

            { id: 29, name: "Bharta", category: "meals", price: 0.7, originalPrice: 1.5, discount: 47, description: "Mashed vegetables, often eggplant or potato, seasoned with spices. Smoky and flavorful, perfect with rice or flatbread.", image: "https://cdn.dhakapost.com/media/imgAll/BG/2021October/received-667070851118864-20211230080946.jpeg" },

            { id: 30, name: "Beef", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Tender beef slow-cooked with cumin, coriander, and garam masala. A hearty curry served with rice or naan.", image: "https://maldivescook.com/wp-content/uploads/beef-curry.jpg" },

            { id: 31, name: "Mutton", category: "meals", price: 4.5, originalPrice: 6, discount: 75, description: "Slow-cooked goat meat in spiced gravy with onions and garlic. Aromatic and filling, paired with rice or paratha.", image: "https://static.toiimg.com/photo/63201465.cms" },

            { id: 32, name: "Chicken", category: "meals", price: 2.2, originalPrice: 3.5, discount: 63, description: "Chicken curry cooked with tomatoes, onions, and garam masala. Mildly spicy and versatile, served with rice or flatbread.", image: "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg" },

            { id: 33, name: "Rui Fish", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Rohu fish simmered in spiced curry with mustard oil. A tangy Bangladeshi classic served with rice.", image: "https://ajinomotobangladesh.com/wp-content/uploads/2023/01/1-4-scaled.jpg" },

            { id: 34, name: "Tangra Fish", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Tangra fish cooked in a light, spicy curry or fried with spices. Delicate and flavorful, served with rice.", image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/bethica-das15240249455ad6c6713b05c.jpeg" },

            { id: 35, name: "Prawn Curry", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Prawns cooked in a rich, coconut-based curry. Spicy and aromatic, perfect with rice or paratha.", image: "https://foodiesterminal.com/wp-content/uploads/2018/07/prawn-curry-goan-style.jpg" },

            { id: 36, name: "Beef Khichuri", category: "mealspackage", price: 4.5, originalPrice: 7, discount: 64, description: "Spiced rice and lentils cooked together with vegetables or meat. Comforting and hearty, garnished with fried onions or ghee.", image: "https://i.ytimg.com/vi/69zEKzBmw-w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvyLGtdmAOXsTB4277pkeHS80OSg" },

            { id: 37, name: "Beef Biryani", category: "mealspackage", price: 5, originalPrice: 7, discount: 71, description: "Fragrant rice layered with spiced beef and saffron. A festive biryani served with raita or salad.", image: "https://www.masala.tv/wp-content/uploads/2015/12/Beef-Biryani-Rida-Aftab.jpg" },

            { id: 38, name: "Mutton Biryani", category: "mealspackage", price: 6, originalPrice: 7.5, discount: 80, description: "Aromatic mutton biryani with caramelized onions and rich spices. A luxurious celebratory dish.", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg" },

            { id: 39, name: "Chicken Biryani", category: "mealspackage", price: 4, originalPrice: 6, discount: 67, description: "Chicken biryani layered with fragrant rice and marinated chicken. Loved for its rich aroma and bold flavor.", image: "https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" },

            { id: 40, name: "Rice+Fish+Veg+Dal", category: "mealspackage", price: 4, originalPrice: 7, discount: 57, description: "Steamed white rice served with spiced fish curry, seasonal vegetables, and comforting red lentil dal. A balanced Bangladeshi meal offering mild heat and rich, homely flavors.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40Sl7Wo0TwvowJYBYRYQXW3-xoFA4E8nnfQ&s" },

            { id: 41, name: "Rice+Beef+Veg+Dal", category: "mealspackage", price: 4, originalPrice: 6, discount: 67, description: "Fluffy rice paired with slow-cooked beef curry, fresh vegetables, and hearty lentil dal. A filling, protein-rich platter with deep, aromatic spices.", image: "https://www.shutterstock.com/image-photo/traditional-nepalese-food-thali-dal-260nw-1827466619.jpg" },

            { id: 42, name: "Rice+Mutton+Veg+Dal", category: "mealspackage", price: 5, originalPrice: 7, discount: 71, description: "Steamed rice served with tender mutton curry, mixed vegetables, and flavorful lentil dal. A classic, festive Bangladeshi combination full of rich, savory taste.", image: "https://media.sublimetrails.com/uploads/img/dal-bhat-tarkari-(2).webp" },

            { id: 43, name: "Rice+Chicken+Veg+Dal", category: "mealspackage", price: 3.5, originalPrice: 5, discount: 70, description: "Soft white rice accompanied by spiced chicken curry, seasonal vegetables, and mildly spiced lentil dal. A wholesome, comforting everyday Bangladeshi meal.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjLvl33Dab8T3IySz7FDzzVyvAJBMMwgQkg&s" },

            { id: 46, name: "Mango (1KG)", category: "fruits", price: 1.2, originalPrice: 1.5, discount: 80, description: "", image: "https://ichef.bbci.co.uk/images/ic/1040x1040/p06hk0h6.jpg" },

            { id: 47, name: "Pinapple (2pc - Medium)", category: "fruits", price: 1.5, originalPrice: 2, discount: 75, description: "", image: "https://www.thetakeout.com/img/gallery/the-storage-trick-that-makes-pineapple-effortlessly-sweeter/l-intro-1736378192.jpg" },

            { id: 48, name: "Apple (1KG)", category: "fruits", price: 5, originalPrice: 6, discount: 83, description: "", image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1xw:0.94466xh;center,top&resize=1200:*" },

            { id: 49, name: "Grape (1KG)", category: "fruits", price: 5, originalPrice: 7, discount: 71, description: "", image: "https://www.seriouseats.com/thmb/XwtcUWlY3TDauWPbBiID1yZ-6Jw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1289843973-karandaev-hero-ca6df1eb21504ba0965e2319ef4c26e3.jpg" },

            { id: 50, name: "Banana (8pcs)", category: "fruits", price: 1, originalPrice: 1.5, discount: 67, description: "", image: "https://efructifera.com/wp-content/uploads/2021/07/NORMALLLL.jpg" },

            { id: 54, name: "Dragon Fruite (1KG)", category: "fruits", price: 1.5, originalPrice: 3, discount: 50, description: "", image: "https://www.siciliaagrumi.it/wp-content/uploads/2021/09/dragonfruit.jpg" },

            { id: 63, name: "Mango Juice", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Sweet, thick mango juice blended from ripe mangoes. A tropical summer favorite served chilled with lemon or sugar.", image: "https://nawon.com.vn/wp-content/uploads/2019/01/10-benefits-of-mango-juice-3.jpg" },

            { id: 64, name: "Pinapple Juice", category: "drinks", price: 2, originalPrice: 3.5, discount: 57, description: "Fresh pineapple juice, sweet and tangy, served chilled with optional salt or sugar.", image: "https://www.kuvingsusa.com/cdn/shop/articles/kuvings-blog-pineapple.png?v=1750962073&width=1024" },

            { id: 65, name: "Apple Juice", category: "drinks", price: 2.5, originalPrice: 4, discount: 63, description: "Clear, refreshing apple juice, lightly sweetened and sometimes mixed with lemon.", image: "https://images.prismic.io/goodnature/ZDIxNjE5ZTAtYjlhMi00ZTlmLTkxNTktODZiODA1YzkxNmFh_apple-juice-hero.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C628&w=1200&h=628&q=75" },

            { id: 66, name: "Grape Juice", category: "drinks", price: 2.5, originalPrice: 4, discount: 63, description: "Sweet, slightly tart grape juice, served chilled for a rich fruity taste.", image: "https://cdn.healthyrecipes101.com/recipes/images/juices/is-concord-grape-juice-healthy-clakvj5ee008kpw1b3qbf3iys.webp" },

            { id: 67, name: "Orange juice", category: "drinks", price: 1.5, originalPrice: 3, discount: 0, description: "Freshly squeezed juice from ripe oranges, naturally sweet and tangy. Served chilled for a refreshing, vitamin-rich drink that’s perfect for hot days or a healthy breakfast boost.", image: "https://greenletes.com/wp-content/uploads/2018/05/orange-juice.png" },

            { id: 68, name: "Banana Juice", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Creamy banana smoothie made with milk or yogurt, sweetened with honey or sugar.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZbTWpW4byTlPa1Y52kcCBLGSw1LIfYuCYw&s" },

            { id: 69, name: "Wattermelon Juice", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Light, hydrating watermelon juice, chilled with a dash of lemon or mint.", image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2019/05/Watermelon-Juice-Square.jpg" },

            { id: 70, name: "Carrot Juice", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Sweet carrot juice, rich in vitamins, sometimes spiced with ginger and lemon.", image: "https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Carrot-Juice-1-of-1.jpeg" },

            { id: 71, name: "Coconut", category: "drinks", price: 0.8, originalPrice: 2, discount: 40, description: "Naturally sweet coconut water, served straight from green coconuts for ultimate refreshment.", image: "https://images.squarespace-cdn.com/content/v1/5c1074accc8fed6a4251da8f/1652200437658-RFWI16B6LU8U3BF7ZN9V/shutterstock_490174816.jpg" },

            { id: 72, name: "Avocado Juice", category: "drinks", price: 1, originalPrice: 1.8, discount: 56, description: "Creamy avocado juice blended with milk or sugar, sometimes drizzled with honey.", image: "https://rita.com.vn/images/2020/avocado-smoothie.webp" },

            { id: 73, name: "Dragon Fruite Juice", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Mildly sweet dragon fruit juice, chilled and sometimes mixed with other fruits.", image: "https://colorfulsuperfoodie.com/wp-content/uploads/2023/07/066A4091_adobe_express.jpeg" },

            { id: 74, name: "Mixed Fruit Juice", category: "drinks", price: 2, originalPrice: 3.5, discount: 57, description: "Mixed fruit juice made from seasonal fruits like mango, pineapple, or banana, served chilled.", image: "https://bestfruitatmosman.com.au/cdn/shop/products/Mixed-Fruits.jpg?v=1636609123" },

            { id: 75, name: "Milk Lassi", category: "drinks", price: 2, originalPrice: 3.5, discount: 57, description: "Traditional lassi made from yogurt and sugar, served chilled with nuts or saffron.", image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg" },

            { id: 76, name: "Black Coffee", category: "drinks", price: 0.75, originalPrice: 1.8, discount: 42, description: "Strong, unsweetened black coffee brewed from roasted beans, served hot or cold.", image: "https://somedayilllearn.com/wp-content/uploads/2020/05/cup-of-black-coffee-scaled-720x540.jpeg" },

            { id: 77, name: "Hot Coffee", category: "drinks", price: 0.75, originalPrice: 1.8, discount: 42, description: "Coffee with milk and sugar, served steaming hot for a comforting drink.", image: "https://media.istockphoto.com/id/509141291/photo/coffee-pouring-to-cup.jpg?s=612x612&w=0&k=20&c=xY0Gb5V6VlLmO6MWeyaMJlIQ_Ebt6esxrkRTr7-jtpM=" },

            { id: 78, name: "Cold Coffee", category: "drinks", price: 0.75, originalPrice: 1.8, discount: 42, description: "Chilled coffee blended with milk, sugar, and ice cream for a creamy treat.", image: "https://www.heinens.com/content/uploads/2022/05/Mocha-Iced-Coffee-with-Vanilla-Cold-Foam-800x550-1.jpg" },

            { id: 79, name: "Black Coffee Premium", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Premium black coffee brewed for bold flavor, served hot or iced.", image: "https://www.abbeyskitchen.com/wp-content/uploads/2022/05/alin-luna-t4bpI1lXVH0-unsplash-scaled.jpg" },

            { id: 80, name: "Hot Coffee Premium", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Premium coffee blended with milk and sugar for a smooth, rich taste.", image: "https://img.freepik.com/premium-photo/hot-fresh-coffee_118124-38005.jpg" },

            { id: 81, name: "Cold Coffee Premium", category: "drinks", price: 1.5, originalPrice: 3, discount: 50, description: "Chilled coffee with premium beans, milk, and ice cream for a luxurious drink.", image: "https://frombowltosoul.com/wp-content/uploads/2025/07/cold-coffee.jpg" },

            { id: 82, name: "Dudh Cha (1pcs) ", category: "drinks", price: 0.8, originalPrice: 1, discount: 80, description: "Milky chai brewed with tea, sugar, and cardamom. A rich, sweet Bangladeshi favorite, served steaming hot in small cups, often paired with snacks like samosas or biscuits.", image: "https://live.staticflickr.com/961/41093853795_47e4cd703b_b.jpg" },

            { id: 84, name: "Rong Cha (1pcs)", category: "drinks", price: 0.5, originalPrice: 1, discount: 50, description: "Plain black tea brewed without milk, lightly sweetened or unsweetened. Simple and refreshing, enjoyed hot in small cups during quick breaks or social gatherings across Bangladesh and India.", image: "https://projonmonews24.com/uploads/news/26828/rong-cha.jpg" },


];  
        
        



// Discount codes off codes
const discountCodes = {
    "WELCOME": 0.00001,
    "SAVE": 0.00001,
    "ALIFKH": 0.00001
};

// Contact information
const whatsappNumber = "+916294353611";
const telegramId = "@Shahinislam11";

// Cart functionality
let cart = [];
let currentCategory = 'all';
let selectedOrderMethod = '';
let appliedDiscount = 0;
let appliedDiscountCode = '';

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDiscount = document.getElementById('cartDiscount');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.getElementById('checkoutBtn');
const orderModal = document.getElementById('orderModal');
const orderOptions = document.querySelectorAll('.order-option');
const confirmOrder = document.getElementById('confirmOrder');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');
const categoryButtons = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('searchInput');
const discountCodeInput = document.getElementById('discountCode');
const applyDiscountBtn = document.getElementById('applyDiscount');
const discountMessage = document.getElementById('discountMessage');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    displayMenuItems();
    setupEventListeners();
    startCarousel();
});

// Display menu items based on category and search
function displayMenuItems() {
    menuGrid.innerHTML = '';
    
    const filteredItems = menuItems.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const searchTerm = searchInput.value.toLowerCase();
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                             item.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No items found matching your criteria.</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        let discountBadge = '';
        if (item.originalPrice) {
            discountBadge = `<div class="discount-badge">${item.discount}% OFF</div>`;
        }
        
        let priceDisplay = `<span class="item-price">$${item.price.toFixed(2)}</span>`;
        if (item.originalPrice) {
            priceDisplay = `
                <span class="item-price">
                    <span class="original-price">$${item.originalPrice.toFixed(2)}</span>
                    $${item.price.toFixed(2)}
                </span>
            `;
        }
        
        menuItem.innerHTML = `
            ${discountBadge}
            <div class="item-image" style="background-image: url('${item.image}')"></div>
            <div class="item-details">
                <h3 class="item-title">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-footer">
                    ${priceDisplay}
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            displayMenuItems();
        });
    });
    
    searchInput.addEventListener('input', displayMenuItems);
    
    applyDiscountBtn.addEventListener('click', applyDiscount);
    discountCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            applyDiscount();
        }
    });
    
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        toggleCart();
        orderModal.classList.add('active');
    });
    
    orderOptions.forEach(option => {
        option.addEventListener('click', function() {
            orderOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedOrderMethod = this.getAttribute('data-method');
        });
    });
    
    confirmOrder.addEventListener('click', function() {
        if (!selectedOrderMethod) {
            alert('Please select an order method');
            return;
        }
        
        // Send order via selected method (no customer info needed)
        sendOrder(selectedOrderMethod);
        
        // Show success message
        orderModal.classList.remove('active');
        successModal.classList.add('active');
        
        // Clear the cart
        cart = [];
        appliedDiscount = 0;
        appliedDiscountCode = '';
        updateCart();
        saveCartToStorage();
    });
    
    closeSuccess.addEventListener('click', function() {
        successModal.classList.remove('active');
    });
}

// Cart functions
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    updateCart();
    saveCartToStorage();
    showAddToCartAnimation(itemId);
}

function updateCart() {
    cartItems.innerHTML = '';
    let subtotal = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartCount.textContent = '0';
        cartSubtotal.textContent = '0.00';
        cartDiscount.textContent = '0.00';
        cartTotal.textContent = '0.00';
        discountMessage.textContent = '';
        discountCodeInput.value = '';
        appliedDiscount = 0;
        appliedDiscountCode = '';
        return;
    }
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const discountAmount = (subtotal * appliedDiscount) / 100;
    const total = subtotal - discountAmount;
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartSubtotal.textContent = subtotal.toFixed(2);
    cartDiscount.textContent = discountAmount.toFixed(2);
    cartTotal.textContent = total.toFixed(2);
    
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(itemId);
        });
    });
    
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            increaseQuantity(itemId);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

function increaseQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += 1;
        updateCart();
        saveCartToStorage();
    }
}

function decreaseQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(itemId);
            return;
        }
        updateCart();
        saveCartToStorage();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    saveCartToStorage();
}

function applyDiscount() {
    const code = discountCodeInput.value.trim().toUpperCase();
    
    if (!code) {
        discountMessage.textContent = 'Please enter a discount code';
        discountMessage.style.color = '#e74c3c';
        return;
    }
    
    if (discountCodes[code]) {
        appliedDiscount = discountCodes[code];
        appliedDiscountCode = code;
        discountMessage.textContent = `Discount applied: ${appliedDiscount}% off`;
        discountMessage.style.color = '#27ae60';
        updateCart();
        saveCartToStorage();
    } else {
        discountMessage.textContent = 'Invalid discount code';
        discountMessage.style.color = '#e74c3c';
    }
}

function showAddToCartAnimation(itemId) {
    // Find elements
    const addButton = document.querySelector(`.add-to-cart[data-id="${itemId}"]`);
    if (!addButton) return;

    const menuItem = addButton.closest('.menu-item');
    const itemImage = menuItem.querySelector('.item-image');
    const cartIcon = document.getElementById('cartIcon');
    if (!itemImage || !cartIcon) return;

    // Get positions
    const imageRect = itemImage.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    // Create floating image clone
    const clonedImage = document.createElement('div');
    clonedImage.className = 'cart-item-clone';
    clonedImage.style.backgroundImage = itemImage.style.backgroundImage;
    clonedImage.style.position = 'absolute';
    clonedImage.style.width = `${imageRect.width}px`;
    clonedImage.style.height = `${imageRect.height}px`;
    clonedImage.style.left = `${imageRect.left + window.scrollX}px`;
    clonedImage.style.top = `${imageRect.top + window.scrollY}px`;
    clonedImage.style.backgroundSize = 'cover';
    clonedImage.style.backgroundPosition = 'center';
    clonedImage.style.borderRadius = '15%';
    clonedImage.style.zIndex = 9999;
    clonedImage.style.transition = 'all 2.5s cubic-bezier(0.25, 1, 0.5, 1)';
    clonedImage.style.opacity = '1';

    document.body.appendChild(clonedImage);

    // Force reflow for transition
    void clonedImage.offsetWidth;

    // Animate towards cart
    clonedImage.style.left = `${cartRect.left + window.scrollX + cartRect.width / 2 - imageRect.width / 2}px`;
    clonedImage.style.top = `${cartRect.top + window.scrollY + cartRect.height / 2 - imageRect.height / 2}px`;
    clonedImage.style.transform = 'scale(0.2)';
    clonedImage.style.opacity = '0.3';

    // Clean up after animation
    setTimeout(() => {
        clonedImage.remove();
        // Bounce the cart icon
        cartIcon.style.transition = 'transform 0.3s ease';
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);
    }, 1000);
}


// Order sending functionality (simplified - no customer info)
function sendOrder(method) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = (subtotal * appliedDiscount) / 100;
    const total = subtotal - discountAmount;
    
    let orderMessage = `🍽️ *NEW ORDER - AlifKH Restaurant* 🍽️\n\n`;
    
    orderMessage += `📋 *Order Details:*\n`;
    cart.forEach(item => {
        orderMessage += `• ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    orderMessage += `\n💰 *Payment Summary:*\n`;
    orderMessage += `Subtotal: $${subtotal.toFixed(2)}\n`;
    
    if (appliedDiscount > 0) {
        orderMessage += `Discount (${appliedDiscountCode}): -$${discountAmount.toFixed(2)}\n`;
    }
    
    orderMessage += `*Total: $${total.toFixed(2)}*\n\n`;
    orderMessage += `⏰ *Order Time:* ${new Date().toLocaleString()}\n`;
    orderMessage += `📦 *Order Method:* ${selectedOrderMethod.toUpperCase()}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(orderMessage);
    
    if (method === 'whatsapp') {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    } else if (method === 'telegram') {
        const cleanTelegramId = telegramId.replace('@', '');
        const telegramUrl = `https://t.me/${cleanTelegramId}?text=${encodedMessage}`;
        const telegramAppUrl = `tg://resolve?domain=${cleanTelegramId}&text=${encodedMessage}`;
        
        window.open(telegramAppUrl, '_blank');
        setTimeout(() => {
            window.open(telegramUrl, '_blank');
        }, 100);
    }
}

// Local storage functions
function saveCartToStorage() {
    const cartData = {
        cart: cart,
        discount: appliedDiscount,
        discountCode: appliedDiscountCode
    };
    localStorage.setItem('alifkhCart', JSON.stringify(cartData));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('alifkhCart');
    if (savedCart) {
        const cartData = JSON.parse(savedCart);
        cart = cartData.cart || [];
        appliedDiscount = cartData.discount || 0;
        appliedDiscountCode = cartData.discountCode || '';
        updateCart();
    }
}

// Carousel functionality
function startCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const controls = document.querySelectorAll('.carousel-control');
    
    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
        
        controls.forEach(control => control.classList.remove('active'));
        controls[index].classList.add('active');
        
        currentSlide = index;
    }
    
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    controls.forEach(control => {
        control.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });
}

// PWA functionality
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("../sw.js")
        .then(() => console.log("SW registered"))
        .catch((err) => console.log("SW fail", err));
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            console.log("✅ User accepted install");
        } else {
            console.log("❌ User dismissed install");
        }
        deferredPrompt = null;
    });
});

// Share functionality
document.getElementById('ShareSite').addEventListener('click', async (e) => {
    e.preventDefault();

    if (navigator.share) {
        const shareMessage = 
            "ভাই শিহানকভিলের সব থেকে ভালো রেস্টুরান্ট এটা , এদের খাবার যেমন টেস্ট তেমনি দাম একেবারে কম , আমি তোকে লিংক পাঠাচ্ছি চেক করে দেখ , অর্ডার করলে ফ্রি ডেলিভারি দিয়ে যাবে : " + window.location.href;
        try {
            await navigator.share({
                title: "Great Restaurant!",
                text: shareMessage
            });
            console.log("Thanks for sharing!");
        } catch (err) {
            console.error("Share failed:", err);
        }
    } else {
        alert("Sharing is not supported on this browser.");
    }
});


// idenhi ivdi balvisi likki 10 arba   ###################################################

var clickCount = 0;
var clickDiv = document.getElementById("clickDiv");
var hiddenDiv = document.getElementById("hdn");

if (!clickDiv || !hiddenDiv) {
  console.error("Could not find clickDiv or hiddenDiv");
} else {
  clickDiv.addEventListener("click", function () {
    clickCount++;
    if (clickCount === 5) {
      hiddenDiv.style.display = "block";
    }
  });
}

