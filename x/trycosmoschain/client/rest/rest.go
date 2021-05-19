package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers trycosmoschain-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/trycosmoschain/sampleTypes/{id}", getSampleTypeHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/trycosmoschain/sampleTypes", listSampleTypeHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/trycosmoschain/sampleTypes", createSampleTypeHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/trycosmoschain/sampleTypes/{id}", updateSampleTypeHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/trycosmoschain/sampleTypes/{id}", deleteSampleTypeHandler(clientCtx)).Methods("POST")

}
