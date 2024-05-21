import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Package)
    private readonly packageRepository: Repository<Package>,
  ) {}

  create(createPackageDto: CreatePackageDto) {
    return this.packageRepository.save(createPackageDto);
  }

  findAll() {
    return this.packageRepository.find({
      relations: {
        event: true,
      },
    });
  }

  findByEvent(eventId: number) {
    return this.packageRepository.find({
      relations: { event: true },
      where: [{ event: { id: eventId } }, { isActive: true }],
    });
  }

  findOne(id: number) {
    return this.packageRepository.findOneBy({ id });
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return this.packageRepository.update(id, updatePackageDto);
  }

  updateStockQuantity(id: number, updatePackageDto: UpdatePackageDto) {
    return this.packageRepository.update(id, updatePackageDto);
  }

  remove(id: number) {
    return this.packageRepository.delete(id);
  }
}
