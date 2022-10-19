# # Pull the base image from the docker hub
# FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
# # Set working directory
# WORKDIR /app

# # Copy csproj and restore as distinct layers
# COPY *.csproj ./
# # Restore dependencies
# RUN dotnet restore

# # Copy everything else and build
# COPY ./ ./
# # Compiles the application, reads through 
# # its dependencies specified in the project file, 
# # and publishes the resulting set of files to a directory.
# RUN dotnet publish -c Release -o out

# # Build runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:5.0
# WORKDIR /app
# COPY --from=build-env /app/out .
# # set entry point of the application and run
# ENTRYPOINT ["dotnet", "Ecom.Catalog.Service.dll"]


# FROM mcr.microsoft.com/dotnet/sdk:5.0
# COPY Ecom.Catalog.Service.csproj .
# RUN dotnet restore
# COPY ["bin/release/net5.0/publish/", "App/"]
# WORKDIR /App
# ENTRYPOINT [ "dotnet","Ecom.Catalog.Service.dll" ]

# syntax=docker/dockerfile:1



FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY *.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app .
EXPOSE 5001
ENTRYPOINT ["dotnet", "Ecom.Catalog.Service.dll"]