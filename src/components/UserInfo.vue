<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-field" src="@/assets/images/photo.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="note1">伤心太平洋</div>
                    <div class="note">我只爱你, u are my sunshine</div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form class="d-flex " role="search">
                <input class="form-control me-2 search" type="search" placeholder="用户名" aria-label="Search">
                <button class="btn btn-outline-success search" type="submit">Search</button>
            </form>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.img-field {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.note {
    font-size: smaller;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 140px;
}
.note1 {
    font-size: small;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 140px;
}
.search {
    font-size: smaller;
}
</style>


