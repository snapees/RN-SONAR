export const cases = [
  {
    caseID: 1001,
    deviceId: 'RU20240620',
    name: 'Alex Johnson',
    surgery: 'Knee Surgery',
    duration: 3,
    // profileImage:
    //   'https://cnmi.spmi.pt/wp-content/uploads/2014/10/speaker-3.jpg',
    profileImage: 'https://i.pravatar.cc/300',
    status: 'inactive',
    age: 19,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  },
  {
    caseID: 1030,
    name: 'Ethan Thompson',
    deviceId: 'RU20240621',
    surgery: 'Elbow Surgery',
    duration: 3,
    profileImage:
      'https://www.shutterstock.com/shutterstock/photos/2307212331/display_1500/stock-photo-happy-mid-aged-business-man-ceo-standing-in-office-arms-crossed-smiling-mature-confident-2307212331.jpg',
    status: 'active',
    age: 39,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  },
  {
    caseID: 1020,
    deviceId: 'RU20240622',
    name: 'Liam Davis',
    surgery: 'Leg Surgery',
    duration: 3,
    profileImage:
      'https://www.shutterstock.com/image-photo/smiling-professional-young-latin-business-260nw-2346440627.jpg',
    status: 'inactive',
    age: 60,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  },
  {
    caseID: 2030,
    deviceId: 'RU20240623',
    name: 'Noah Martin',
    surgery: 'Hand Surgery',
    duration: 3,
    profileImage:
      'https://www.shutterstock.com/image-photo/proud-confident-bearded-indian-business-260nw-2203174407.jpg',
    status: 'complete',
    age: 29,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  },
  {
    caseID: 9030,
    deviceId: 'RU20240624',
    name: 'Deepak Bhide',
    surgery: 'Elbow Surgery',
    duration: 10,
    profileImage:
      'https://www.shutterstock.com/image-photo/happy-professional-young-latin-business-260nw-2349712585.jpg',
    status: 'inactive',
    age: 32,
    gender: 'Male',
    hospital: 'Charnock Hospital',
  },
];

export const countries = [
  {country: 'Afghanistan', code: '93', iso: 'AF'},
  {country: 'Albania', code: '355', iso: 'AL'},
  {country: 'Algeria', code: '213', iso: 'DZ'},
  {country: 'American Samoa', code: '1-684', iso: 'AS'},
  {country: 'Andorra', code: '376', iso: 'AD'},
  {country: 'Angola', code: '244', iso: 'AO'},
  {country: 'Anguilla', code: '1-264', iso: 'AI'},
  {country: 'Antarctica', code: '672', iso: 'AQ'},
  {country: 'Antigua and Barbuda', code: '1-268', iso: 'AG'},
  {country: 'Argentina', code: '54', iso: 'AR'},
  {country: 'Armenia', code: '374', iso: 'AM'},
  {country: 'Aruba', code: '297', iso: 'AW'},
  {country: 'Australia', code: '61', iso: 'AU'},
  {country: 'Austria', code: '43', iso: 'AT'},
  {country: 'Azerbaijan', code: '994', iso: 'AZ'},
  {country: 'Bahamas', code: '1-242', iso: 'BS'},
  {country: 'Bahrain', code: '973', iso: 'BH'},
];

export const patientReadingsData = [
  {time: '08:00', temperature: 98, skin: 5, redness: 2},
  {time: '12:00', temperature: 100, skin: 6, redness: 3},
  {time: '16:00', temperature: 99, skin: 4, redness: 1},
  {time: '17:00', temperature: 101, skin: 7, redness: 4},
  {time: '17:30', temperature: 78, skin: 7, redness: 4},
  {time: '19:00', temperature: 89, skin: 7, redness: 4},
  {time: '20:00', temperature: 95, skin: 7, redness: 4},
  {time: '20:30', temperature: 99, skin: 7, redness: 4},
];

export const profession = [
  {id: 1, professionName: 'Doctor'},
  {id: 2, professionName: 'HCP'},
  {id: 3, professionName: 'Surgeon'},
  {id: 4, professionName: 'Nurse'},
  {id: 5, professionName: 'Staff'},
  {id: 6, professionName: 'Attendant'},
];

export const hospital = [
  {id: 1, hospitalName: 'Hospital A'},
  {id: 2, hospitalName: 'Hospital B'},
  {id: 3, hospitalName: 'Hospital C'},
  {id: 4, hospitalName: 'Hospital D'},
  {id: 5, hospitalName: 'Hospital E'},
  {id: 6, hospitalName: 'Hospital F'},
];

export const userProfile = {
  userName: 'Amit Thakur',
  email: 'iamamitthakur2602@gmail.com',
  profession: '',
  hospital: '',
  dob: '',
  createdAt: '',
  profileUpdated: false,
  firstLogin: true,
};

export const chartData = [
  {x: new Date(2016, 6, 1), y: 0, open: 5, close: 10, high: 15, low: 0},
  {x: new Date(2016, 6, 2), y: 5, open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 3), y: 10, open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 4), y: 15, open: 20, close: 13, high: 25, low: 7},
  {x: new Date(2016, 6, 5), y: 20, open: 11, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 6), y: 25, open: 8, close: 5, high: 10, low: 3},
  {x: new Date(2016, 6, 7), y: 30, open: 9, close: 12, high: 18, low: 6},
  {x: new Date(2016, 6, 8), y: 35, open: 12, close: 15, high: 20, low: 8},
  {x: new Date(2016, 6, 9), y: 40, open: 15, close: 18, high: 22, low: 10},
  {x: new Date(2016, 6, 10), y: 45, open: 18, close: 20, high: 25, low: 12},
  {x: new Date(2016, 6, 11), y: 50, open: 20, close: 22, high: 28, low: 15},
  {x: new Date(2016, 6, 12), y: 55, open: 22, close: 18, high: 30, low: 15},
  {x: new Date(2016, 6, 13), y: 60, open: 25, close: 20, high: 32, low: 18},
  {x: new Date(2016, 6, 14), y: 65, open: 28, close: 22, high: 35, low: 20},
  {x: new Date(2016, 6, 15), y: 70, open: 30, close: 25, high: 38, low: 22},
  {x: new Date(2016, 6, 16), y: 75, open: 32, close: 28, high: 40, low: 25},
  {x: new Date(2016, 6, 17), y: 80, open: 35, close: 30, high: 42, low: 28},
  {x: new Date(2016, 6, 18), y: 85, open: 38, close: 32, high: 45, low: 30},
  {x: new Date(2016, 6, 19), y: 90, open: 40, close: 35, high: 48, low: 32},
  {x: new Date(2016, 6, 20), y: 95, open: 42, close: 45, high: 50, low: 35},
];
