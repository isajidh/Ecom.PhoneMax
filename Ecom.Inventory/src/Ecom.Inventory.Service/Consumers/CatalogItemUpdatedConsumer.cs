using System.Collections.ObjectModel;
using System.Threading.Tasks;
using MassTransit;
using Ecom.Catalog.Contracts;
using Ecom.Api;
using Ecom.Inventory.Service.Entities;

namespace Ecom.Inventory.Service.Consumers
{
    public class CatalogItemUpdatedConsumer : IConsumer<CatalogItemUpdated>
    {

        private readonly IRepository<CatalogItem> repository;
        public CatalogItemUpdatedConsumer(IRepository<CatalogItem> repository)
        {
            this.repository = repository;
        }
        public async Task Consume(ConsumeContext<CatalogItemUpdated> context)
        {
            var message = context.Message;

            var item = await repository.GetAsync(message.ItemId);

            if (item == null)
            {
                item = new CatalogItem
                {
                    Id = message.ItemId,
                    Name = message.Name,
                    Description = message.Description
                };

            }
            await repository.UpdateAsync(item);

        }

    }
}