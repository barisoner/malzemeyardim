using Microsoft.EntityFrameworkCore;
using MalzemeYardim.Infra.Data;
using MalzemeYardim.Infra.IoC;

var builder = WebApplication.CreateBuilder(args);

// IoC Katmanı Üzerinden Bağımlılıkları Kaydeder
DependencyContainer.RegisterServices(builder.Services, builder.Configuration.GetConnectionString("DefaultConnection"));

var app = builder.Build();

//Test IOC DATA ve WEB bağlantılı düzgün çalışıyor mu ? TEST
app.MapGet("/testdb", async (MalzemeYardimDbContext dbContext) => {
    try
    {
        var canConnect = await dbContext.Database.CanConnectAsync();
        return canConnect ? "Database connection success" : "Failed to connect to the database.";
    }
    catch (Exception ex)
    {
        
        return $"An error occurred: {ex.Message}";
    }
});

app.Run();