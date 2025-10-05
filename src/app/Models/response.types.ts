export type ApiResponse<T = any> = {
  status: string;
  message: string;
  data?: T;
};

// T rend le type générique pour que TypeSCript sache quel type est dans data