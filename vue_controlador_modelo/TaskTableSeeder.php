<?php

use Illuminate\Database\Seeder;
use App\Task;
class TaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         factory(Task::class, 5)->create();
    }
}
