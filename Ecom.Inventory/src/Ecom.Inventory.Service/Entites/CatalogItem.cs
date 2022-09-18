using System;
using Ecom.Api;

namespace Ecom.Inventory.Service.Entities
{
    public class CatalogItem : IEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}