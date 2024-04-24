const pool = require("../db");

const findItemByType = (organizationId, type, zone) => {
  const query = `
  SELECT 
    item.id AS item_id, 
    item.description
FROM 
    item 
JOIN 
    pricing ON item.id = pricing.item_id
WHERE 
    pricing.organization_id = $1
    AND item.type = $2
    AND pricing.zone = $3;
  `;

  return pool
    .query(query, [organizationId, type, zone])
    .then((res) => {
      if (res.rows.length === 0) {
        return;
      }
      return res.rows[0].item_id;
    })
    .catch((error) => {
      console.error("Error in findItemByType:", error);
      throw error;
    });
};

module.exports = findItemByType;
