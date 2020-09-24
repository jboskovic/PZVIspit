import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoalService } from '../services/goal.service';
import { Goal } from '../models/goal.model';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private goalService: GoalService) {
    this.form = this.formBuilder.group({
      naziv: ['', [Validators.required]],
      opis: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      vaznost: ['', [Validators.required]],
      korak1: ['', [Validators.required]],
      korak2: [],
      korak3: [],
      korak4: [],
      korak5: [],
    })
  }

  public save(data) {
    if (this.form.valid) {
      let newGoal = {
        naziv: data.naziv,
        opis: data.opis,
        vaznost: data.vaznost as number
      }
      this.goalService.addGoal(newGoal).subscribe((goal) => {
        if (goal) {
          let koraci = [];
          koraci.push({
            cilj: (goal as Goal)._id,
            redniBroj: 1,
            opis: data.korak1
          });
          if (data.korak2) {
            koraci.push({
              cilj: (goal as Goal)._id,
              redniBroj: 2,
              opis: data.korak2
            });
          }
          if (data.korak3) {
            koraci.push({
              cilj: (goal as Goal)._id,
              redniBroj: 3,
              opis: data.korak3
            });
          }
          if (data.korak4) {
            koraci.push({
              cilj: (goal as Goal)._id,
              redniBroj: 4,
              opis: data.korak4
            });
          }
          if (data.korak5) {
            koraci.push({
              cilj: (goal as Goal)._id,
              redniBroj: 5,
              opis: data.korak5
            });
          }

          koraci.forEach(korak => {
            this.goalService.addStep(korak).subscribe(r => {
              console.log(r);
            })
          });
        }

      });
    } else {
      let content = "";
      if (this.form.get('naziv').invalid) {
        content += "Uneti naziv nije validan.\n"
      }
      else if (this.form.get('opis').invalid) {
        content += "Uneti opis nije validan.\n"
      }
      else if (this.form.get('vaznost').invalid) {
        content += "Morate uneti vaznost.\n"
      }
      else if (this.form.get('korak1').invalid) {
        content += "Morate uneti bar jedan korak."
      }

      document.getElementById("greska").textContent = content;
      document.getElementById('greska').style.display = "block";
    }
  }
  ngOnInit(): void {
  }

}
