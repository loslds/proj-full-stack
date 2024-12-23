import { useState, useEffect } from 'react';

interface Empresa {
  id: number;
  nome: string;
}
const useEmpresas = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/empresas');
        if (!response.ok) {
          throw new Error('Erro ao buscar empresas');
        }
        const data = await response.json();
        setEmpresas(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmpresas();
  }, []);

  return { empresas, loading, error };
};

export default useEmpresas;