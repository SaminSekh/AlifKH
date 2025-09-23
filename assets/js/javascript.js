
        // Menu data with discounts
        const menuItems = [

            { id: 1, name: "Pani puri/ Fuchka (10pcs)", category: "fastfood", price: 4, originalPrice: 6, discount: 67, description: "Crispy, hollow puris filled with spicy tamarind water, chickpeas, and potatoes. Popular street food, eaten in one bite for a burst of tangy and spicy flavors. Served with a side of extra spiced water for customization. ", image: "https://www.seema.com/wp-content/uploads/2022/08/Pani-Poori.jpg" },

            { id: 2, name: "Pani puri/ Fuchka (50pcs)", category: "fastfood", price: 17, originalPrice: 30, discount: 57, description: "Larger serving of the same crispy puris with tangy, spicy tamarind water and fillings. Ideal for sharing, offering a mix of sweet, sour, and spicy tastes. Commonly found at street stalls, served with chutneys and mashed potatoes. ", image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pani_puri_90458_16x9.jpg" },

            { id: 3, name: "Dal Puri (4pcs)", category: "fastfood", price: 3, originalPrice: 6, discount: 50, description: "Deep-fried flatbreads stuffed with spiced lentil (dal) filling. Crispy outside with a soft, flavorful lentil center, often enjoyed as a snack. Served with chutney or spicy curry for dipping. ", image: "https://www.salmathechef.com/fileadmin/user_upload/66426523_384937842159724_1394540683754209280_o.jpg" },

            { id: 4, name: "Jhal Muri", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Puffed rice mixed with spices, chopped onions, green chilies, and peanuts. A light, crunchy street snack with a spicy and tangy flavor profile. Served in paper cones, perfect for on-the-go eating. ", image: "https://southindianfoods.in/recipe_picture_enlarge/jhal-muri-masala-puffed-rice.jpg" },

            { id: 5, name: "Special Jhal Muri (curry)", category: "fastfood", price: 3, originalPrice: 7, discount: 43, description: "Puffed rice tossed with curry-flavored spices, vegetables, and tangy chutneys. Enhanced with a richer, curry-like taste compared to regular jhal muri. Served fresh in a cone or bowl for a bold, spicy experience. ", image: "https://www.whiskaffair.com/wp-content/uploads/2020/10/Jhal-Muri-2-3.jpg" },

            { id: 6, name: "Alur chop", category: "fastfood", price: 1, originalPrice: 2, discount: 50, description: "Spiced mashed potato patties coated in gram flour batter and deep-fried. Crispy on the outside, soft inside, with a hint of cumin and chili. Served with tamarind chutney or ketchup as a popular street snack. ", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/%E0%A6%86%E0%A6%B2%E0%A7%81%E0%A6%B0_%E0%A6%9A%E0%A6%AA.jpg" },

            { id: 7, name: "Piayaju", category: "fastfood", price: 1, originalPrice: 2, discount: 50, description: "Lentil-based fritters made with onions, green chilies, and spices, deep-fried. Crunchy and savory, a staple Bangladeshi street food snack. Often paired with tea or served with spicy chutney. ", image: "https://www.nehascookbook.com/wp-content/uploads/2022/10/Aloo-chop-WS.jpg" },

            { id: 8, name: "Beguni", category: "fastfood", price: 1, originalPrice: 2, discount: 50, description: "Thinly sliced eggplant coated in gram flour batter and deep-fried. Crispy and flavorful, often spiced with turmeric and chili powder. Served as a snack or side dish with rice or chutney. ", image: "https://yummyfoodmadeeasy.wordpress.com/wp-content/uploads/2012/08/img_2127.jpg" },

            { id: 9, name: "Chola Makha", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "Boiled chickpeas mixed with chopped onions, chilies, and tangy spices. A light, refreshing street food with a zesty, savory taste. Served in a bowl, often garnished with coriander and lemon juice. ", image: "https://img-global.cpcdn.com/recipes/7bc2a0cb09f12aba/680x781cq80/4-min-chola-makha-or-black-chana-chaat-recipe-main-photo.jpg" },

            { id: 10, name: "Special Chola Makha", category: "fastfood", price: 2.99, originalPrice: 7, discount: 43, description: "Enhanced version of chola makha with extra spices, boiled egg, or meat pieces. Offers a richer flavor with added ingredients like tamarind or yogurt. Served as a hearty street snack, often with puffed rice topping. ", image: "https://i.ytimg.com/vi/XYDm2EuOAL8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6I1uEEZYTMNjPoFLlu3_PMhIc0g" },

            { id: 11, name: "Egg Roll", category: "fastfood", price: 1.5, originalPrice: 4, discount: 38, description: "Paratha or flatbread wrapped around a spiced egg omelet with onions and sauces. A popular Bangladeshi street food, savory and satisfying. Served hot with ketchup or spicy chutney. ", image: "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG" },

            { id: 12, name: "Premium Egg Roll", category: "fastfood", price: 2.99, originalPrice: 6, discount: 50, description: "Egg roll with extra fillings like cheese, chicken, or premium sauces. Thicker paratha and richer flavors elevate this street food classic. Served as a filling snack with a side of chutney. ", image: "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/anz/calcmenu/recipe/killer-recipes-update/californian-egg-roll-main-header-anz.jpg" },

            { id: 13, name: "Chicken Roll", category: "fastfood", price: 3, originalPrice: 6, discount: 50, description: "Paratha rolled with spiced, grilled chicken, onions, and tangy sauces. A hearty street food option, popular in Bangladesh and India. Served hot, often with a sprinkle of chaat masala. ", image: "https://madscookhouse.com/wp-content/uploads/2021/02/Chicken-Kathi-Roll-500x375.jpg" },

            { id: 14, name: "Chow Mein", category: "fastfood", price: 3, originalPrice: 5, discount: 60, description: "Stir-fried noodles with vegetables, soy sauce, and spices, sometimes with meat. A fusion dish popular in South Asian street food culture. Served hot, garnished with spring onions or chili sauce. ", image: "https://takestwoeggs.com/wp-content/uploads/2025/05/Cantonese-Chow-Mein-noodle-pull.jpg" },

            { id: 15, name: "Premium Chow Mein", category: "fastfood", price: 3.99, originalPrice: 7, discount: 57, description: "Chow mein with premium ingredients like shrimp, chicken, or extra vegetables. Features richer sauces and a more complex flavor profile. Served as a full meal, often with a side of chili paste. ", image: "https://chefjar.com/wp-content/uploads/2024/09/chicken-chow-mein-1.jpg" },

            { id: 16, name: "Egg Toast", category: "fastfood", price: 1, originalPrice: 3, discount: 33, description: "Bread topped with a spiced egg mixture, fried or toasted until golden. A quick, savory breakfast or snack option in South Asia. Served with ketchup or chutney for added flavor. ", image: "https://images.heb.com/is/image/HEBGrocery/Test/sunny-side-egg-in-toast-recipe.jpg" },

            { id: 17, name: "Burger", category: "fastfood", price: 2, originalPrice: 5, discount: 40, description: "A bun with a spiced meat or veggie patty, lettuce, onions, and sauces. South Asian-style burgers often include local spices or chutneys. Served as a quick meal with fries or a drink", image: "https://www.francoislambert.one/cdn/shop/articles/mac_poulet_corn_flakes.webp?v=1723557298&width=1100" },

            { id: 18, name: "Special Burger", category: "fastfood", price: 3.5, originalPrice: 7, discount: 50, description: "Burger with premium ingredients like cheese, egg, or grilled meat. Enhanced with extra sauces or spices for a bolder taste. Served as a hearty fast food option, often with a side. ", image: "https://www.datocms-assets.com/129288/1725393944-moist-chicken-burgers.jpg" },

            { id: 19, name: "Paratha with curry (2 pcs)", category: "fastfood", price: 3, originalPrice: 5, discount: 60, description: "Layered, flaky flatbread cooked with ghee or oil on a griddle. Soft and crispy, often served with curries or as a snack. Popular in Bangladesh, India, and Pakistan for its versatility. ", image: "https://vegehomecooking.com/wp-content/uploads/2024/08/TriangleParathaFeaturedImage.jpg" },

            { id: 20, name: "Mughlai", category: "fastfood", price: 2, originalPrice: 4, discount: 50, description: "Rich, spiced dish with meat (often chicken) cooked in a creamy gravy. Served with paratha or naan, reflecting Mughal culinary influences. A indulgent street food option, garnished with nuts or herbs. ", image: "https://www.getbengal.com/uploads/story_image/Tourism-Mughlai-Paratha.jpg" },

            { id: 21, name: "Chatpati", category: "fastfood", price: 1, originalPrice: 4, discount: 25, description: "A tangy, spicy mix of chickpeas, onions, chilies, and tamarind sauce. Popular Bangladeshi street food, similar to chaat, with a zesty kick. Served in a bowl, garnished with sev or coriander. ", image: "https://img-global.cpcdn.com/recipes/71b1c35259310cb4/680x781cq80/fry-chatpati-chaat-recipe-main-photo.jpg" },

            { id: 25, name: "Rice / Vat (1 person)", category: "meals", price: 1, originalPrice: 3, discount: 33, description: "Plain or lightly spiced steamed rice, served as a staple for one. Often paired with curries, dal, or vegetables in South Asian meals. Served hot in a bowl or plate for a balanced meal. ", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/basmati-rice-recipe.jpg" },

            { id: 26, name: "Mosur Dal", category: "meals", price: 1, originalPrice: 3, discount: 33, description: "Red lentil curry cooked with turmeric, onions, and mild spices. A comforting, protein-rich side dish, common in Bangladeshi cuisine. Served with rice or flatbread for a wholesome meal. ", image: "https://www.whiskaffair.com/wp-content/uploads/2021/02/Bengali-Masoor-Dal-2-3.jpg" },

            { id: 27, name: "Vegetable", category: "meals", price: 1.5, originalPrice: 3, discount: 50, description: "Mixed vegetables cooked with spices like cumin, turmeric, and coriander. A versatile side dish, varying by region and seasonal ingredients. Served with rice or paratha as part of a meal. ", image: "https://greenbowl2soul.com/wp-content/uploads/2021/06/Indian-vegetable-curry.jpg" },

            { id: 28, name: "Bharta", category: "meals", price: 1, originalPrice: 3, discount: 33, description: "Mashed vegetables (often eggplant or potato) mixed with spices and onions. A smoky, flavorful side dish, popular in Bangladesh and India. Served with rice or flatbread, garnished with coriander. ", image: "https://cdn.dhakapost.com/media/imgAll/BG/2021October/received-667070851118864-20211230080946.jpeg" },

            { id: 29, name: "Beef", category: "meals", price: 2.5, originalPrice: 4, discount: 63, description: "Tender beef cooked with spices like cumin, coriander, and garam masala. A rich, savory curry, common in Bangladeshi and Pakistani cuisine. Served with rice or naan for a hearty meal. ", image: "https://maldivescook.com/wp-content/uploads/beef-curry.jpg" },

            { id: 30, name: "Mutton", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Slow-cooked goat meat in a spiced gravy with onions and garlic. A flavorful, aromatic dish popular across South Asia. Served with rice, paratha, or biryani for a filling meal. ", image: "https://static.toiimg.com/photo/63201465.cms" },

            { id: 31, name: "Chicken", category: "meals", price: 2.5, originalPrice: 4, discount: 63, description: "Chicken cooked in a spiced curry with tomatoes, onions, and garam masala. A staple in South Asian cuisine, versatile and mildly spicy. Served with rice or flatbread as a main course", image: "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg" },

            { id: 32, name: "Rui Fish", category: "meals", price: 2, originalPrice: 4, discount: 50, description: "Rohu fish cooked in a spiced curry with mustard oil or turmeric. A popular Bangladeshi dish with a tangy, savory flavor. Served with rice for a traditional meal. ", image: "https://ajinomotobangladesh.com/wp-content/uploads/2023/01/1-4-scaled.jpg" },

            { id: 33, name: "Tangra Fish", category: "meals", price: 2, originalPrice: 4, discount: 50, description: "Tangra fish cooked in a light, spicy curry or fried with spices. Common in Bangladeshi cuisine, known for its delicate texture. Served with rice or as a standalone dish. ", image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/bethica-das15240249455ad6c6713b05c.jpeg" },

            { id: 34, name: "Prawn Curry", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Prawns cooked in a rich, spicy curry with coconut milk or tomatoes. A flavorful seafood dish popular in coastal South Asia. Served with rice or paratha for a delicious meal. ", image: "https://foodiesterminal.com/wp-content/uploads/2018/07/prawn-curry-goan-style.jpg" },

            { id: 35, name: "Bhuna Khichuri", category: "meals", price: 3, originalPrice: 5, discount: 60, description: "Spiced rice and lentil dish cooked with vegetables or meat. A comforting, one-pot meal, popular in Bangladesh during monsoons. Served hot, often garnished with fried onions or ghee. ", image: "https://i0.wp.com/cookingcanary.com/wp-content/uploads/2022/02/Bengali-Bhuna-khichuri-served.jpg?fit=600%2C800&ssl=1" },

            { id: 36, name: "Beef Biryani", category: "meals", price: 5, originalPrice: 7, discount: 71, description: "Fragrant rice layered with spiced beef, cooked with saffron and herbs. A festive dish, rich in flavor, popular in Pakistan and Bangladesh. Served with raita or salad for a complete meal. ", image: "https://www.masala.tv/wp-content/uploads/2015/12/Beef-Biryani-Rida-Aftab.jpg" },

            { id: 37, name: "Mutton Biryani", category: "meals", price: 7, originalPrice: 10, discount: 70, description: "Aromatic rice layered with tender, spiced mutton and caramelized onions. A celebratory dish, known for its bold, complex flavors. Served with yogurt or spicy gravy for a luxurious meal. ", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg" },

            { id: 38, name: "Chicken Biryani", category: "meals", price: 4, originalPrice: 6, discount: 67, description: "Spiced rice layered with marinated chicken, infused with saffron and spices. A widely loved South Asian dish, perfect for quick meals or gatherings. Served with raita or boiled egg for added flavor. ", image: "https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" },

            { id: 45, name: "Mango (500g)", category: "fruits", price: 2, originalPrice: 4, discount: 50, description: "", image: "https://ichef.bbci.co.uk/images/ic/1040x1040/p06hk0h6.jpg" },

            { id: 46, name: "Pinapple (500g)", category: "fruits", price: 2, originalPrice: 4, discount: 50, description: "", image: "https://www.thetakeout.com/img/gallery/the-storage-trick-that-makes-pineapple-effortlessly-sweeter/l-intro-1736378192.jpg" },

            { id: 47, name: "Apple (500g)", category: "fruits", price: 2, originalPrice: 4, discount: 50, description: "", image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1xw:0.94466xh;center,top&resize=1200:*" },

            { id: 48, name: "Grape (500g)", category: "fruits", price: 2, originalPrice: 4, discount: 50, description: "", image: "https://www.seriouseats.com/thmb/XwtcUWlY3TDauWPbBiID1yZ-6Jw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1289843973-karandaev-hero-ca6df1eb21504ba0965e2319ef4c26e3.jpg" },

            { id: 49, name: "Banana (500g)", category: "fruits", price: 2, originalPrice: 3, discount: 67, description: "", image: "https://efructifera.com/wp-content/uploads/2021/07/NORMALLLL.jpg" },

            { id: 50, name: "Wattermelon (500g)", category: "fruits", price: 2, originalPrice: 3, discount: 67, description: "", image: "https://www.willhiteseed.com/assets/images/products/0607-large.jpg" },

            { id: 51, name: "Carrot (500g)", category: "fruits", price: 2, originalPrice: 4, discount: 50, description: "", image: "https://thefarmersstore.com.au/cdn/shop/products/carrotts_grande.jpg?v=1616291961" },

            { id: 52, name: "Avocado (500g)", category: "fruits", price: 2, originalPrice: 5, discount: 40, description: "", image: "https://greenmonday.cy/img/pics/ab1a4d0dd4d48a2ba1077c4494791306/ab1a4d0dd4d48a2ba1077c4494791306.jpg?1610975033" },

            { id: 53, name: "Dragon Fruite (500g)", category: "fruits", price: 2, originalPrice: 6, discount: 33, description: "", image: "https://www.siciliaagrumi.it/wp-content/uploads/2021/09/dragonfruit.jpg" },

            { id: 62, name: "Mango Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Sweet, thick juice made from freshly blended ripe mangoes, often strained for smoothness. A beloved summer drink in South Asia, known for its rich, tropical flavor. Served chilled, sometimes with a hint of lemon or sugar for extra zing. ", image: "https://nawon.com.vn/wp-content/uploads/2019/01/10-benefits-of-mango-juice-3.jpg" },

            { id: 63, name: "Pinapple Juice", category: "drinks", price: 1, originalPrice: 4, discount: 25, description: "Sweet and tangy juice made from freshly blended pineapple chunks. Popular in South Asia for its refreshing, tropical flavor, often served chilled. May include a pinch of salt or sugar to enhance taste. ", image: "https://www.kuvingsusa.com/cdn/shop/articles/kuvings-blog-pineapple.png?v=1750962073&width=1024" },

            { id: 64, name: "Apple Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Clear, sweet juice extracted from fresh apples, sometimes filtered. A light, refreshing drink enjoyed in cafes and homes across South Asia. Served chilled, occasionally mixed with lemon for a zesty twist. ", image: "https://images.prismic.io/goodnature/ZDIxNjE5ZTAtYjlhMi00ZTlmLTkxNTktODZiODA1YzkxNmFh_apple-juice-hero.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C628&w=1200&h=628&q=75" },

            { id: 65, name: "Grape Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Sweet and slightly tart juice made from crushed fresh grapes. Less common but enjoyed in urban South Asian settings for its rich flavor. Served chilled, often as a standalone drink or in mixed juice blends. ", image: "https://cdn.healthyrecipes101.com/recipes/images/juices/is-concord-grape-juice-healthy-clakvj5ee008kpw1b3qbf3iys.webp" },

            { id: 66, name: "Banana Juice", category: "drinks", price: 1, originalPrice: 4, discount: 25, description: "Creamy, thick smoothie made from blended bananas, often with milk or yogurt. A filling, nutritious drink popular in South Asian households and stalls. Served chilled, sometimes sweetened with honey or sugar. ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZbTWpW4byTlPa1Y52kcCBLGSw1LIfYuCYw&s" },

            { id: 67, name: "Wattermelon Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Light, hydrating juice extracted from juicy watermelon flesh. A cooling summer drink, widely loved in South Asia for its refreshing taste. Served chilled, often with a dash of lemon or mint for extra flavor. ", image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2019/05/Watermelon-Juice-Square.jpg" },

            { id: 68, name: "Carrot Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Sweet, earthy juice made from fresh carrots, rich in vitamins. Popular in South Asia as a healthy drink, sometimes spiced with ginger. Served chilled, often with a squeeze of lemon for balance. ", image: "https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Carrot-Juice-1-of-1.jpeg" },

            { id: 69, name: "Coconut", category: "drinks", price: 1, originalPrice: 4, discount: 25, description: "Fresh coconut water, naturally sweet and hydrating, from green coconuts. A tropical staple in South Asia, served straight from the shell. Consumed chilled or at room temperature with a straw for refreshment. ", image: "https://images.squarespace-cdn.com/content/v1/5c1074accc8fed6a4251da8f/1652200437658-RFWI16B6LU8U3BF7ZN9V/shutterstock_490174816.jpg" },

            { id: 70, name: "Avocado Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Creamy, rich juice made from blended avocados, often mixed with milk or sugar. An urban, modern drink gaining traction in South Asian cities. Served chilled, sometimes with a drizzle of honey for sweetness. ", image: "https://rita.com.vn/images/2020/avocado-smoothie.webp" },

            { id: 71, name: "Dragon Fruite Juice", category: "drinks", price: 1, originalPrice: 4, discount: 25, description: "Mildly sweet juice from vibrant dragon fruit, often blended with water or ice. An exotic, trendy drink popular in South Asian cafes and juice bars. Served chilled, sometimes mixed with other fruits for enhanced flavor. ", image: "https://colorfulsuperfoodie.com/wp-content/uploads/2023/07/066A4091_adobe_express.jpeg" },

            { id: 72, name: "Mixed Fruit Juice", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "A refreshing blend of seasonal fruits like mango, pineapple, and banana. Customized based on local fruit availability, popular at South Asian stalls. Served chilled, often with a touch of lemon or sugar for balance. ", image: "https://bestfruitatmosman.com.au/cdn/shop/products/Mixed-Fruits.jpg?v=1636609123" },

            { id: 73, name: "Milk Lassi", category: "drinks", price: 2, originalPrice: 6, discount: 33, description: "Creamy, yogurt-based drink blended with sugar, sometimes flavored with fruit or spices. A traditional South Asian beverage, available in sweet or salty variations. Served chilled, often garnished with nuts or saffron for a festive touch. ", image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg" },

            { id: 74, name: "Black Coffee", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Strong, unsweetened coffee brewed from roasted coffee beans. Popular in South Asian cafes, enjoyed for its bold, bitter flavor. Served hot or cold, with milk or sugar as optional additions. ", image: "https://somedayilllearn.com/wp-content/uploads/2020/05/cup-of-black-coffee-scaled-720x540.jpeg" },

            { id: 75, name: "Hot Coffee", category: "drinks", price: 1, originalPrice: 3, discount: 33, description: "Warm, brewed coffee mixed with milk and sugar to taste. A comforting drink served in South Asian homes and cafes. Served steaming hot in cups, often paired with snacks like biscuits. ", image: "https://media.istockphoto.com/id/509141291/photo/coffee-pouring-to-cup.jpg?s=612x612&w=0&k=20&c=xY0Gb5V6VlLmO6MWeyaMJlIQ_Ebt6esxrkRTr7-jtpM=" },

            { id: 76, name: "Cold Coffee", category: "drinks", price: 2, originalPrice: 3, discount: 67, description: "Chilled coffee blended with milk, sugar, and sometimes ice cream for creaminess. A popular summer beverage in South Asian cafes and restaurants. Served in tall glasses, often topped with froth or whipped cream. ", image: "https://www.heinens.com/content/uploads/2022/05/Mocha-Iced-Coffee-with-Vanilla-Cold-Foam-800x550-1.jpg" },

            { id: 77, name: "Black Coffee Premium", category: "drinks", price: 2, originalPrice: 5, discount: 40, description: "Strong, high-quality coffee brewed from premium roasted beans, unsweetened for a bold taste. Popular in upscale South Asian cafes, offering a rich, aromatic experience. Served hot or cold, often with optional milk or sugar on the side. ", image: "https://www.abbeyskitchen.com/wp-content/uploads/2022/05/alin-luna-t4bpI1lXVH0-unsplash-scaled.jpg" },

            { id: 78, name: "Hot Coffee Premium", category: "drinks", price: 2, originalPrice: 4, discount: 50, description: "Warm, robust coffee made from premium beans, blended with milk and sugar to taste. Served in South Asian cafes, known for its smooth, full-bodied flavor. Poured steaming hot in cups, often paired with pastries or snacks. ", image: "https://img.freepik.com/premium-photo/hot-fresh-coffee_118124-38005.jpg" },

            { id: 79, name: "Cold Coffee Premium", category: "drinks", price: 2, originalPrice: 4, discount: 50, description: "Chilled coffee crafted from premium beans, blended with milk, sugar, and ice cream for richness. A luxurious summer drink in South Asian restaurants, featuring a creamy texture. Served in tall glasses, often topped with whipped cream or coffee froth. ", image: "https://frombowltosoul.com/wp-content/uploads/2025/07/cold-coffee.jpg" },

            { id: 80, name: "Dudh Cha (1pcs)", category: "drinks", price: 0.8, originalPrice: 1, discount: 80, description: "Milky tea brewed with black tea, milk, sugar, and aromatic spices like cardamom. A beloved Bangladeshi drink, known for its rich, sweet flavor. Served hot in small cups, often with samosas or biscuits. ", image: "https://live.staticflickr.com/961/41093853795_47e4cd703b_b.jpg" },

            { id: 81, name: "Dudh Cha (3pcs)", category: "drinks", price: 2, originalPrice: 3, discount: 67, description: "Milky tea brewed with black tea, milk, sugar, and aromatic spices like cardamom. A beloved Bangladeshi drink, known for its rich, sweet flavor. Served hot in small cups, often with samosas or biscuits. ", image: "https://live.staticflickr.com/961/41093853795_47e4cd703b_b.jpg" },

            { id: 82, name: "Rong Cha (1pcs)", category: "drinks", price: 0.5, originalPrice: 1, discount: 50, description: "Plain black tea brewed without milk, lightly sweetened or unsweetened. A simple, refreshing tea widely consumed in Bangladesh and India. Served hot in small cups, ideal for quick breaks or social gatherings. ", image: "https://projonmonews24.com/uploads/news/26828/rong-cha.jpg" },

            { id: 83, name: "Rong Cha (5pcs)", category: "drinks", price: 2, originalPrice: 5, discount: 40, description: "Plain black tea brewed without milk, lightly sweetened or unsweetened. A simple, refreshing tea widely consumed in Bangladesh and India. Served hot in small cups, ideal for quick breaks or social gatherings. ", image: "https://projonmonews24.com/uploads/news/26828/rong-cha.jpg" },


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

// Customer information
let customerInfo = {
    name: '',
    contact: '',
    contactType: 'phone'
};

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

// Customer info elements
const customerNameInput = document.getElementById('customerName');
const customerContactInput = document.getElementById('customerContact');
const contactTypeSelect = document.getElementById('contactType');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadCustomerInfo();
    displayMenuItems();
    setupEventListeners();
    startCarousel();
    
    contactTypeSelect.addEventListener('change', updateContactPlaceholder);
});

// Load customer information from local storage
function loadCustomerInfo() {
    const savedCustomerInfo = localStorage.getItem('alifkhCustomerInfo');
    if (savedCustomerInfo) {
        customerInfo = JSON.parse(savedCustomerInfo);
        customerNameInput.value = customerInfo.name;
        customerContactInput.value = customerInfo.contact;
        contactTypeSelect.value = customerInfo.contactType;
        updateContactPlaceholder();
    }
}

// Save customer information to local storage
function saveCustomerInfo() {
    localStorage.setItem('alifkhCustomerInfo', JSON.stringify(customerInfo));
}

// Update contact input placeholder based on selected type
function updateContactPlaceholder() {
    const contactType = contactTypeSelect.value;
    switch(contactType) {
        case 'whatsapp':
            customerContactInput.placeholder = 'Enter your WhatsApp number';
            break;
        case 'telegram':
            customerContactInput.placeholder = 'Enter your Telegram username (without @)';
            break;
        case 'phone':
            customerContactInput.placeholder = 'Enter your phone number';
            break;
        default:
            customerContactInput.placeholder = 'Enter your contact information';
    }
}

// Validation functions
function isValidPhone(phone) {
    return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
}

function isValidTelegram(username) {
    return /^[a-zA-Z0-9_]{5,32}$/.test(username);
}

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
        
        const customerName = customerNameInput.value.trim();
        const customerContact = customerContactInput.value.trim();
        const contactType = contactTypeSelect.value;
        
        if (!customerName) {
            alert('Please enter your name');
            return;
        }
        
        if (!customerContact) {
            alert('Please enter your contact information');
            return;
        }
        
        if (contactType === 'whatsapp' && !isValidPhone(customerContact)) {
            alert('Please enter a valid WhatsApp number');
            return;
        }
        
        if (contactType === 'telegram' && !isValidTelegram(customerContact)) {
            alert('Please enter a valid Telegram username (without @)');
            return;
        }
        
        if (contactType === 'phone' && !isValidPhone(customerContact)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // Save customer information
        customerInfo = {
            name: customerName,
            contact: customerContact,
            contactType: contactType
        };
        saveCustomerInfo();
        
        // Send order via selected method
        sendOrder(selectedOrderMethod, customerName, customerContact, contactType);
        
        // Show success message
        orderModal.classList.remove('active');
        successModal.classList.add('active');
        
        // Clear the cart (but keep customer info)
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
    showAddToCartAnimation();
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

function showAddToCartAnimation() {
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// Order sending functionality
function sendOrder(method, customerName, customerContact, contactType) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = (subtotal * appliedDiscount) / 100;
    const total = subtotal - discountAmount;
    
    let orderMessage = `🍽️ *NEW ORDER - AlifKH Restaurant* 🍽️\n\n`;
    orderMessage += `👤 *Customer Information:*\n`;
    orderMessage += `• Name: ${customerName}\n`;
    orderMessage += `• Contact: ${customerContact} (${contactType})\n\n`;
    
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
        // FIXED: Remove @ symbol from Telegram ID for the URL
        const cleanTelegramId = telegramId.replace('@', '');
        
        // Method 1: Direct message (most reliable)
        const telegramUrl = `https://t.me/${cleanTelegramId}?text=${encodedMessage}`;
        
        // Method 2: Alternative approach using share
        // const telegramShareUrl = `tg://msg?text=${encodedMessage}`;
        
        // Try to open Telegram app first, then fallback to web
        const telegramAppUrl = `tg://resolve?domain=${cleanTelegramId}&text=${encodedMessage}`;
        
        // Open both links - app will take priority if installed
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


//app shortcut          ###################################################
// Service Worker রেজিস্টার
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    .then(() => console.log("SW registered"))
    .catch((err) => console.log("SW fail", err));
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

// Install prompt event ধরার জন্য
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // বাটন দেখাও
  installBtn.style.display = "inline-block";
});

// বাটনে ক্লিক করলে prompt দেখাবে
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


//share        ###################################################
document.getElementById('ShareSite').addEventListener('click', async (e) => {
    e.preventDefault();

    if (navigator.share) {
        const shareMessage = 
            "I visited this restaurant and it's very good! Check it out: " + window.location.href;
        try {
            await navigator.share({
                title: "Great Restaurant!",
                text: shareMessage      // 👈 everything in text
                // no url property
            });
            console.log("Thanks for sharing!");
        } catch (err) {
            console.error("Share failed:", err);
        }
    } else {
        alert("Sharing is not supported on this browser.");
    }
});
