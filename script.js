/* =========================================
   RIVO STORE
   PRODUCT SETTINGS
========================================= */


/*
    عدّل المنتجات من هنا.

    name        = اسم المنتج
    price       = السعر
    category    = التصنيف
    image       = مسار الصورة
    sizes       = المقاسات
    colors      = الألوان
*/


const PRODUCTS = [

    {
        id: 1,

        name: "Statement Hoodie",

        arabicName: "هودي ستاتمنت",

        price: 950,

        category: "graphic",

        tag: "BEST SELLER",

        image:"images/h1.jpg.jpeg",

        design: "R.",

        description:
            "هودي بتصميم شبابي جريء يناسب ستايل الشارع. قطعة مختلفة للناس اللي بتحب تعبّر عن نفسها.",

        sizes: ["S", "M", "L", "XL", "XXL"],

        colors: [
            {
                name: "أسود",
                hex: "#111111"
            },
            {
                name: "أوف وايت",
                hex: "#e8e5dc"
            }
        ]

    },


    {
        id: 2,

        name: "No Rules Hoodie",

        arabicName: "هودي نو رولز",

        price: 1050,

        category: "graphic",

        tag: "NEW DROP",

        image: "images/h2.jpeg",

        design: "NO",

        description:
            "تصميم جرافيك شبابي للناس اللي بتحب تختار قواعدها بنفسها. ستايل جريء ومختلف.",

        sizes: ["S", "M", "L", "XL", "XXL"],

        colors: [
            {
                name: "أسود",
                hex: "#111111"
            },
            {
                name: "رمادي",
                hex: "#777777"
            }
        ]

    },


    {
        id: 3,

        name: "Rivo Essential",

        arabicName: "ريڤو إسينشال",

        price: 850,

        category: "minimal",

        tag: "MINIMAL",

        image: "images/h3.jpeg",

        design: "R.",

        description:
            "هودي Minimal بتصميم بسيط وشعار مميز. مناسب للاستخدام اليومي وتنسيق الملابس.",

        sizes: ["S", "M", "L", "XL", "XXL"],

        colors: [
            {
                name: "أوف وايت",
                hex: "#e8e5dc"
            },
            {
                name: "أسود",
                hex: "#111111"
            }
        ]

    },


{
        id: 4,

        name: "Statement Hoodie",

        arabicName: "هودي ستاتمنت",

        price: 950,

        category: "graphic",

        tag: "BEST SELLER",

        image:"images/h1.jpg.jpeg",

        design: "R.",

        description:
            "هودي بتصميم شبابي جريء يناسب ستايل الشارع. قطعة مختلفة للناس اللي بتحب تعبّر عن نفسها.",

        sizes: ["S", "M", "L", "XL", "XXL"],

        colors: [
            {
                name: "أسود",
                hex: "#111111"
            },
            {
                name: "أوف وايت",
                hex: "#e8e5dc"
            }
        ]

    },







    {
        id: 5,

        name: "Oversized Club",

        arabicName: "هودي أوفر سايز",

        price: 1100,

        category: "oversized",

        tag: "OVERSIZED",

        image: "images/h4.jpeg",

        design: "RV",

        description:
            "هودي بقصة Oversized واسعة ومريحة مع تصميم ستريت وير شبابي.",

        sizes: ["M", "L", "XL", "XXL"],

        colors: [
            {
                name: "فحمي",
                hex: "#333333"
            },
            {
                name: "أسود",
                hex: "#111111"
            }
        ]

    }

];



/* =========================================
   STORE SETTINGS
========================================= */


const STORE = {

    name: "RIVO STORE",

    whatsapp: "201023713311"

};


/*
    مهم جدًا:

    استبدل رقم واتساب المثال برقم البراند الحقيقي.

    مثال مصري:

    2010XXXXXXX

    بدون علامة +
    وبدون الصفر الأول من رقم الموبايل.
*/



/* =========================================
   GOVERNORATES
========================================= */


const GOVERNORATES = [

    "القاهرة",

    "الجيزة",

    "الإسكندرية",

    "القليوبية",

    "الشرقية",

    "الدقهلية",

    "الغربية",

    "المنوفية",

    "البحيرة",

    "كفر الشيخ",

    "دمياط",

    "بورسعيد",

    "الإسماعيلية",

    "السويس",

    "شمال سيناء",

    "جنوب سيناء",

    "الفيوم",

    "بني سويف",

    "المنيا",

    "أسيوط",

    "سوهاج",

    "قنا",

    "الأقصر",

    "أسوان",

    "البحر الأحمر",

    "الوادي الجديد",

    "مطروح"

];



/* =========================================
   GLOBAL VARIABLES
========================================= */


let currentProduct = null;

let selectedSize = "";

let selectedColor = null;

let selectedQuantity = 1;



/* =========================================
   HELPER FUNCTIONS
========================================= */


function formatPrice(price) {

    return price.toLocaleString("en-US") + " جنيه";

}


function getProduct(id) {

    return PRODUCTS.find(product => product.id === Number(id));

}



/* =========================================
   HOODIE MOCKUP
========================================= */


function createHoodie(product) {

    return `

        <div class="hoodie-shape">

            <div class="hoodie-hood"></div>

            <div class="hoodie-body">

                <span>${product.design}</span>

                <small>RIVO STREETWEAR</small>

            </div>

            <div class="hoodie-sleeve sleeve-left"></div>

            <div class="hoodie-sleeve sleeve-right"></div>

        </div>

    `;

}



/* =========================================
   HOME PAGE
========================================= */


function renderProducts(filter = "all") {

    const grid = document.getElementById("productGrid");

    const products = PRODUCTS.filter(product => {

        return filter === "all" || product.category === filter;

    });


    grid.innerHTML = products.map(product => {

        return `

            <article

                class="product-card"

                tabindex="0"

                role="link"

                aria-label="تفاصيل ${product.arabicName}"

                onclick="openProduct(${product.id})"

                onkeydown="if(event.key === 'Enter' || event.key === ' '){event.preventDefault();openProduct(${product.id})}"

            >

                <div class="product-image">

                    <span class="product-tag">

                        ${product.tag}

                    </span>


                    <img
    src="${product.image}"
    alt="${product.arabicName}"
    class="real-product-image"
    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
>

<div class="product-placeholder" style="display:none;">
    ${createHoodie(product)}
</div>


                    <span class="quick-view">

                        شوف التفاصيل والمقاسات ↙

                    </span>

                </div>


                <div class="product-meta">

                    <h3>

                        ${product.arabicName}

                    </h3>


                    <strong>

                        ${formatPrice(product.price)}

                    </strong>

                </div>


                <div class="product-sub">

                    UNISEX · RIVO ORIGINAL

                </div>

            </article>

        `;

    }).join("");

}



/* =========================================
   PRODUCT FILTERS
========================================= */


document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelectorAll(".filter").forEach(item => {

            item.classList.remove("active");

        });


        this.classList.add("active");


        renderProducts(this.dataset.filter);

    });

});



/* =========================================
   PAGE NAVIGATION
========================================= */


function showPage(pageId) {

    document.getElementById("homePage").classList.add("hidden");

    document.getElementById("productPage").classList.add("hidden");

    document.getElementById("checkoutPage").classList.add("hidden");


    document.getElementById(pageId).classList.remove("hidden");


    document.getElementById("navigation").classList.remove("open");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


function showHome() {

    showPage("homePage");

    history.pushState({}, "", location.pathname);

}



/* =========================================
   OPEN PRODUCT DETAILS
========================================= */


function openProduct(productId) {

    currentProduct = getProduct(productId);


    if (!currentProduct) {

        alert("المنتج غير موجود.");

        return;

    }


    selectedSize = "";

    selectedColor = currentProduct.colors[0];

    selectedQuantity = 1;


    document.getElementById("detailName").textContent =

        currentProduct.arabicName + " / " + currentProduct.name;


    document.getElementById("detailPrice").textContent =

        formatPrice(currentProduct.price);


    document.getElementById("detailDescription").textContent =

        currentProduct.description;


    document.getElementById("detailCategory").textContent =

        "RIVO / " + currentProduct.category.toUpperCase();


    document.getElementById("selectedSizeName").textContent =

        "اختار مقاسك";


    document.getElementById("quantityValue").textContent = 1;


    /*
        لو صورة المنتج موجودة، هتظهر.

        لو الصورة مش موجودة، هيظهر التصميم التوضيحي.
    */


    const photo = document.getElementById("productPhoto");

    const imageContainer = document.getElementById("detailsImage");

    const placeholder = document.getElementById("productPlaceholder");


    photo.onerror = function () {

        imageContainer.classList.remove("has-photo");

    };


    photo.onload = function () {

        imageContainer.classList.add("has-photo");

    };


    imageContainer.classList.remove("has-photo");


    photo.src = currentProduct.image;


    document.getElementById("placeholderDesign").textContent =

        currentProduct.design;


    updateProductColors();

    updateProductSizes();


    showPage("productPage");


    history.pushState(

        {},

        "",

        "?product=" + currentProduct.id

    );

}



/* =========================================
   SELECT COLORS
========================================= */


function updateProductColors() {

    const container = document.getElementById("colorOptions");


    container.innerHTML = currentProduct.colors.map((color, index) => {

        return `

            <button

                type="button"

                class="color-option ${index === 0 ? "selected" : ""}"

                style="background:${color.hex}"

                aria-label="${color.name}"

                title="${color.name}"

                onclick="selectColor(${index})"

            ></button>

        `;

    }).join("");


    document.getElementById("selectedColorName").textContent =

        selectedColor.name;

}


function selectColor(index) {

    selectedColor = currentProduct.colors[index];


    document.querySelectorAll(".color-option").forEach((button, i) => {

        button.classList.toggle("selected", i === index);

    });


    document.getElementById("selectedColorName").textContent =

        selectedColor.name;


    /*
        تغيير لون التصميم التوضيحي.

        مع الصور الحقيقية، الأفضل توفير صورة مستقلة لكل لون.
    */


    const body = document.querySelector(

        "#productPlaceholder .hoodie-body"

    );


    const sleeves = document.querySelectorAll(

        "#productPlaceholder .hoodie-sleeve"

    );


    const hood = document.querySelector(

        "#productPlaceholder .hoodie-hood"

    );


    const lightColor = selectedColor.hex.toLowerCase() === "#e8e5dc";


    body.style.background = selectedColor.hex;

    body.style.color = lightColor ? "#111111" : "#ffffff";


    sleeves.forEach(sleeve => {

        sleeve.style.background = selectedColor.hex;

    });


    hood.style.background = selectedColor.hex;

}



/* =========================================
   SELECT SIZES
========================================= */


function updateProductSizes() {

    const container = document.getElementById("sizeOptions");


    container.innerHTML = currentProduct.sizes.map(size => {

        return `

            <button

                type="button"

                class="size-option"

                onclick="selectSize('${size}', this)"

            >

                ${size}

            </button>

        `;

    }).join("");

}


function selectSize(size, button) {

    selectedSize = size;


    document.querySelectorAll(".size-option").forEach(item => {

        item.classList.remove("selected");

    });


    button.classList.add("selected");


    document.getElementById("selectedSizeName").textContent = size;

}



/* =========================================
   QUANTITY
========================================= */


document.getElementById("minusQuantity").addEventListener("click", () => {

    if (selectedQuantity > 1) {

        selectedQuantity--;

    }


    document.getElementById("quantityValue").textContent =

        selectedQuantity;

});


document.getElementById("plusQuantity").addEventListener("click", () => {

    if (selectedQuantity < 10) {

        selectedQuantity++;

    }


    document.getElementById("quantityValue").textContent =

        selectedQuantity;

});



/* =========================================
   CONTINUE TO CHECKOUT
========================================= */


document.getElementById("continueOrder").addEventListener("click", () => {

    if (!selectedSize) {

        alert("اختار المقاس الأول.");

        return;

    }


    const order = {

        productId: currentProduct.id,

        name: currentProduct.name,

        arabicName: currentProduct.arabicName,

        price: currentProduct.price,

        image: currentProduct.image,

        size: selectedSize,

        color: selectedColor.name,

        colorHex: selectedColor.hex,

        quantity: selectedQuantity,

        design: currentProduct.design

    };


    sessionStorage.setItem(

        "rivoOrder",

        JSON.stringify(order)

    );


    renderCheckout();


    showPage("checkoutPage");


    history.pushState({}, "", "?checkout");

});



/* =========================================
   CHECKOUT
========================================= */


function renderCheckout() {

    const order = JSON.parse(

        sessionStorage.getItem("rivoOrder") || "null"

    );


    if (!order) {

        alert("اختار منتج الأول.");

        showHome();

        return;

    }


    const subtotal = order.price * order.quantity;


    document.getElementById("checkoutProduct").innerHTML = `

        <div class="summary-product">

            <div class="summary-thumb">

                ${createHoodie({

                    design: order.design

                })}

            </div>


            <div>

                <h3>${order.arabicName}</h3>


                <p>

                    اللون: ${order.color}

                    <br>

                    المقاس: ${order.size}

                    <br>

                    الكمية: ${order.quantity}

                </p>


                <strong>${formatPrice(subtotal)}</strong>

            </div>

        </div>

    `;


    document.getElementById("checkoutSubtotal").textContent =

        formatPrice(subtotal);


    document.getElementById("checkoutTotal").textContent =

        formatPrice(subtotal) + " + الشحن";

}



/* =========================================
   GOVERNORATES
========================================= */


const governorateSelect = document.getElementById("governorate");


GOVERNORATES.forEach(governorate => {

    const option = document.createElement("option");


    option.value = governorate;

    option.textContent = governorate;


    governorateSelect.appendChild(option);

});



/* =========================================
   SEND ORDER TO WHATSAPP
========================================= */


document.getElementById("checkoutForm").addEventListener("submit", function (event) {

    event.preventDefault();


    if (!this.reportValidity()) {

        return;

    }


    const order = JSON.parse(

        sessionStorage.getItem("rivoOrder") || "null"

    );


    if (!order) {

        alert("الأوردر غير موجود. ارجع واختار المنتج من جديد.");

        showHome();

        return;

    }


    const formData = new FormData(this);


    const customer = {

        name: formData.get("fullName"),

        phone: formData.get("phone"),

        altPhone: formData.get("altPhone"),

        governorate: formData.get("governorate"),

        address: formData.get("address"),

        landmark: formData.get("landmark"),

        contactPreference: formData.get("contactPreference"),

        notes: formData.get("notes")

    };


    const subtotal = order.price * order.quantity;


    const message = `

🖤 *طلب جديد من RIVO STORE*

━━━━━━━━━━━━━━

*تفاصيل الأوردر*

المنتج: ${order.arabicName}

Product: ${order.name}

السعر: ${formatPrice(order.price)}

اللون: ${order.color}

المقاس: ${order.size}

الكمية: ${order.quantity}

إجمالي المنتجات: ${formatPrice(subtotal)}

الشحن: يتم تأكيده لاحقًا

━━━━━━━━━━━━━━

*بيانات العميل*

الاسم: ${customer.name}

الموبايل: ${customer.phone}

الرقم البديل: ${customer.altPhone || "غير متوفر"}

المحافظة: ${customer.governorate}

العنوان: ${customer.address}

أقرب علامة مميزة: ${customer.landmark}

طريقة التواصل: ${customer.contactPreference}

ملاحظات: ${customer.notes || "لا توجد"}

━━━━━━━━━━━━━━

الإجمالي المبدئي: ${formatPrice(subtotal)} + الشحن

برجاء تأكيد توفر المنتج وتكلفة الشحن.

    `.trim();


    /*
        لازم تغير رقم واتساب المثال
        قبل استقبال طلبات حقيقية.
    */


    if (

        !STORE.whatsapp ||

        STORE.whatsapp === "201000000000"

    ) {

        alert(

            "غيّر رقم واتساب البراند في STORE.whatsapp داخل script.js الأول."

        );

        return;

    }


    const whatsappURL =

        "https://wa.me/" +

        STORE.whatsapp +

        "?text=" +

        encodeURIComponent(message);


    window.open(whatsappURL, "_blank", "noopener");

});



/* =========================================
   WHATSAPP CONTACT BUTTON
========================================= */


document.getElementById("contactWhatsApp").addEventListener("click", function (event) {

    event.preventDefault();


    if (STORE.whatsapp === "201000000000") {

        alert("غيّر رقم واتساب البراند داخل script.js الأول.");

        return;

    }


    const message = encodeURIComponent(

        "أهلاً RIVO STORE، عايز أستفسر عن الكولكشن."

    );


    window.open(

        `https://wa.me/${STORE.whatsapp}?text=${message}`,

        "_blank",

        "noopener"

    );

});



/* =========================================
   MOBILE MENU
========================================= */


document.getElementById("menuToggle").addEventListener("click", () => {

    document.getElementById("navigation").classList.toggle("open");

});



/* =========================================
   INITIALIZATION
========================================= */


document.getElementById("currentYear").textContent =

    new Date().getFullYear();


renderProducts();



/* =========================================
   BROWSER BACK BUTTON
========================================= */


window.addEventListener("popstate", () => {

    const params = new URLSearchParams(location.search);


    if (params.has("checkout")) {

        renderCheckout();

        showPage("checkoutPage");

    } else if (params.has("product")) {

        openProduct(params.get("product"));

    } else {

        showPage("homePage");

    }

});
