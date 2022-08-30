<script setup></script>

<template>
    <header class="header">
        <div class="header__left">
            <div class="logo">
                <img
                    alt="Vue logo"
                    src="@/assets/logo.svg"
                    width="50"
                    height="50"
                />
                <h4>Drops</h4>
            </div>

            <ul class="header__list">
                <li class="header__item"><a href="">Home</a></li>
                <li class="header__item"><a href="">Shop</a></li>
                <li class="header__item"><a href="">Contact</a></li>
            </ul>
        </div>
        <a href="#" class="cart"
            >Cart / $0.00
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                /></svg
        ></a>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
}

.header__left {
    display: flex;
}
.logo {
    padding: 5px;
    text-align: center;
    margin-right: 50px;
}

.logo img {
    background: #b5ed39;
    padding: 5px;
    margin-bottom: 5px;
}

.logo h4 {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
}

.header__list {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 22px;
    font-weight: 500;
}

.cart {
    padding: 10px 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #b5ed39;
}

.cart svg {
    width: 25px;
}
</style>
