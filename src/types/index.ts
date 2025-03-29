export interface User {
  id: string;
  email: string;
  role: 'admin' | 'doctor' | 'nurse' | 'patient';
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface Patient {
  id: string;
  userId: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  bloodType: string;
  allergies: string[];
  medicalHistory: string;
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  dateTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  reason: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  medication: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}