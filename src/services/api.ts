// src/services/api.ts
export const postCarbonFootprint = async (body: Record<string, unknown>) => {
    try {
      const response = await fetch("https://www.carboninterface.com/api/v1/estimates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer XB6ouRWW8GaUVLrHIAt6Uw",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      if (responseData.data && responseData.data.attributes) {
        return responseData;  
      } else {
        console.warn("Niepoprawna struktura odpowiedzi API:", responseData);
        return null;
      }
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
      throw error;
    }
  };
  