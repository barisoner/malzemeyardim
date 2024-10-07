using Microsoft.EntityFrameworkCore;

namespace MalzemeYardim.Infra.Data
{
    public class MalzemeYardimDbContext : DbContext
    {
        public MalzemeYardimDbContext(DbContextOptions<MalzemeYardimDbContext> options)
            : base(options)
        {

        }
    }
}