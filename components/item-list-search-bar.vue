<template>
    <div class="item-list-search-bar">
        <nav class="navbar navbar-light bg-faded">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-2">
                        <span class="header-title">Search</span>
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Keywords">
                    </div>
                    <div class="col-sm-3">
                        <select class="form-control">
                            <option selected>Max price</option>
                            <option value="10">< 10&euro;</option>
                            <option value="30">< 30&euro;</option>
                            <option value="100">< 100&euro;</option>
                            <option value="500">< 500&euro;</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>    
    export default {
        
    }
</script>