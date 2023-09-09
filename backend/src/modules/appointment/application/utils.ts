import { AppointmentValue } from "../domain";

interface UtilDateColission {
  initialDate: Date;
  durationMinutes: number;
}

export class Utils {
  static convertMilisecondsToMinutes(miliseconds: number) {
    return miliseconds / 1000 / 60;
  }

  static areDatesSameDate(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private static checkDatesColission(
    date1: UtilDateColission,
    date2: UtilDateColission
  ) {
    const initialDate1 = Utils.convertMilisecondsToMinutes(
      new Date(date1.initialDate).getTime()
    );
    const initialDate2 = Utils.convertMilisecondsToMinutes(
      new Date(date2.initialDate).getTime()
    );

    return (
      initialDate1 + date1.durationMinutes > initialDate2 ||
      initialDate2 + date2.durationMinutes > initialDate1
    );
  }

  private static getAppointmentsByDateDay(
    appointments: AppointmentValue[],
    date: Date
  ) {
    return appointments.filter((appointment) =>
      Utils.areDatesSameDate(new Date(appointment.date), date)
    );
  }

  static getAppointmentInSameTime(
    appointments: AppointmentValue[],
    date: UtilDateColission
  ) {
    return Utils.getAppointmentsByDateDay(appointments, date.initialDate).find(
      (appointment) =>
        Utils.checkDatesColission(
          {
            initialDate: new Date(appointment.date),
            durationMinutes: appointment.durationMinutes,
          },
          {
            initialDate: date.initialDate,
            durationMinutes: date.durationMinutes,
          }
        )
    );
  }
}
