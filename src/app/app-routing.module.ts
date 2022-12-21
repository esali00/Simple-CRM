import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "employees", component: UserComponent},
  {path: "employees/:id", component: UserDetailComponent},
  {path: "customers", component: CustomersComponent},
  {path: "customers/:id", component: CustomerDetailComponent},
  {path: "tasks", component: TasksComponent},
  {path: "send_email", component: SendEmailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
