<script setup>


</script>

<template>
       <div class="container">
            <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled text-center align-items-center">
                <li class="nav-item py-1">
                  <router-link class="nav-link customize-border py-1 link" to="Subjects"> <i class="ri-settings-5-line"></i> Manage Subjects</router-link>
                </li>
                <li class="nav-item py-1">
                  <a class="nav-link customize-border py-1 link" href="#"><i class="ri-line-chart-line"></i> View Analytics</a>
                </li>
                <li class="nav-item py-1">
                  <a class="nav-link customize-border py-1 link" href="#"> <i class="ri-bar-chart-box-line"></i> View Grades</a>
                </li>
                <li class="nav-item py-1">
                  <a class="nav-link customize-border py-1 link" href="#"> <i class="ri-calendar-todo-line"></i> Manage Task</a>
                </li>
                <li class="nav-item py-1">
                   <a class="nav-link customize-border py-1 link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add Subject</a>
                </li>
            </ul>
       </div>




      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>







</template>


<style scoped>
.customize-border{
    border: solid 1px #d5d5d5f5;
    border-radius: 6px;
    box-shadow: gray 0px 2.5px 3px 0px;

}
.customize-border:hover{
    box-shadow: #0a0c1a 0px 2.5px 3px 0px;
    transition: all 0.5s;
}
</style>
