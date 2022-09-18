FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY Ecom.Inventory.Service.csproj .
COPY ./NuGet.Config ./
RUN dotnet restore Ecom.Inventory.Service.csproj --configfile ./NuGet.Config
COPY . .
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=build /app .
ENTRYPOINT ["dotnet", "Ecom.Inventory.Service.dll"]