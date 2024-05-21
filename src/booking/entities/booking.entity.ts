import { Package } from 'src/package/entities/package.entity';
import { BOOKING_STATUS, TRANS_METHOD } from 'src/utills/enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  transactionMethod!: TRANS_METHOD;

  @Column({ unique: true, nullable: true })
  transactionNumber!: string;

  @Column({ unique: true, nullable: true })
  confirmationCode: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  spouseFirstName: string;

  @Column()
  spouseLastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ default: new Date().getTime() })
  bookedTime: string;

  @Column({
    default: new Date(
      new Date().setMinutes(new Date().getMinutes() + 2),
    ).getTime(),
  })
  expireTime!: string;

  @Column()
  bookedFrom: string;

  @Column({ default: BOOKING_STATUS.BOOKED })
  bookingStatus: BOOKING_STATUS;

  @ManyToOne(() => Package, (pack) => pack.bookings)
  package: Package;
}
