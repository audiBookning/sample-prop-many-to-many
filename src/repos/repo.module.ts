import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from '../entities/client/client.repository';
import { ClientEmailRepository } from '../entities/local-manytomany/client-email.repository';
import { ClientPhoneRepository } from '../entities/local-manytomany/client-phone.repository';
import { EmailRepository } from '../entities/local/email.repository';
import { PhoneRepository } from '../entities/local/phone.repository';
import { PropertyRepository } from '../entities/local/property.repository';
import { WebsiteRepository } from '../entities/local/website.repository';
import { RepoService } from './repo.service';

@Global()
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      ClientRepository,
      // Local
      EmailRepository,
      PhoneRepository,
      WebsiteRepository,
      PropertyRepository,
      // manyToMany
      ClientEmailRepository,
      ClientPhoneRepository,
    ]),
  ],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}
