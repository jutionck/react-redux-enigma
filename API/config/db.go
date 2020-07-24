package config

import (
	"database/sql"
	"fmt"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"log"

	// driver sql
	_ "github.com/go-sql-driver/mysql"
)
var (
	dbUser, dbPass, dbHost, dbPort, schemaName string
)

func ConfifDb() (*sql.DB, error) {
	dbUser = utils.ViperGetEnv("DB_USER", "root")
	dbPass = utils.ViperGetEnv("DB_PASSWORD", "password")
	dbHost = utils.ViperGetEnv("DB_HOST", "localhost")
	dbPort = utils.ViperGetEnv("DB_PORT", "3306")
	schemaName = utils.ViperGetEnv("DB_SCHEMA", "schema")

	dbSourceName := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPass, dbHost, dbPort, schemaName)
	db, _ := sql.Open("mysql", dbSourceName)
	if err := db.Ping(); err != nil {
		log.Panic(err)
	}
	return db, nil
}
