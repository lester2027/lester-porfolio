<script>
const btn = document.getElementById("seemore-btn");
const content = document.getElementById("seemore-aboutme");

let isOpen = false;

btn.addEventListener("click", () => {
    isOpen = !isOpen;

    content.classList.toggle("active");

    btn.innerHTML = isOpen 
        ? '<i class="fa-solid fa-angle-up"></i>' 
        : '<i class="fa-solid fa-angle-down"></i>';
});
</script>