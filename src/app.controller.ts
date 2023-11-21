import { Controller, Get, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { error } from 'console';

const regexp = new RegExp(/[[:alnum:]]+/g);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getForm(
    @Query('email') email: string,
    @Query('jelszo') jelszo: string,
    @Query('jelszo2') jelszo2: string,
  ): object {
    const errors: any = {};
    if (email === '') {
      errors.email = 'Töltse ki az email cím mezőt!';
    }
    if (jelszo.search(regexp)) {
      errors.jelszo = 'A jelszó csak betűt és számot tartalmazhat!';
    }
    if (jelszo === '') {
      errors.jelszo = 'Töltse ki a jelszó mezőt!';
    }
    if (jelszo != jelszo2) {
      errors.jelszo2 = 'Ugyanazt a jelszót kell megadni!';
    }
    return { email, jelszo, jelszo2, errors, negyedik: 12 };
  }
}
