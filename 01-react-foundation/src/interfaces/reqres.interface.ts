interface reqresUserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

interface Support {
  url: string;
  text: string;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}