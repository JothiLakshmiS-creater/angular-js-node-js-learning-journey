const app = angular.module("taskApp", []);

app.controller("TaskController", function ($scope, $http) {
  $scope.tasks = [];

  // Load tasks from backend
  function loadTasks() {
    $http.get("/api/tasks").then((response) => {
      $scope.tasks = response.data;
    });
  }

  // Add a new task
  $scope.addTask = function () {
    if (!$scope.newTask) return;
    $http.post("/api/tasks", { title: $scope.newTask }).then((response) => {
      $scope.tasks.push(response.data);
      $scope.newTask = ""; // clear input
    });
  };

  // Delete task
  $scope.deleteTask = function (id) {
    $http.delete(`/api/tasks/${id}`).then(() => {
      $scope.tasks = $scope.tasks.filter((task) => task.id !== id);
    });
  };

  loadTasks();
});
