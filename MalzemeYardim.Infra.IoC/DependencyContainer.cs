using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using MalzemeYardim.Infra.Data;

namespace MalzemeYardim.Infra.IoC
{
    public static class DependencyContainer
    {
        public static void RegisterServices(IServiceCollection services, string connectionString)
        {
            // DbContext Bağımlılığı Ekler
            services.AddDbContext<MalzemeYardimDbContext>(options =>
                options.UseSqlServer(connectionString));
        }
    }
}