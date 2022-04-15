// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));

const process = require("process");
const { Metadata, credentials } = require("@grpc/grpc-js");
const { NodeSDK } = require("@opentelemetry/sdk-node");
const {
    getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const { Resource } = require("@opentelemetry/resources");
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-grpc");

// Metadata is passed into to the tracer to provide both the dataset name and the api key reuired for Honeycomb

const metadata = new Metadata();
metadata.set("x-honeycomb-team", "ce4b7019c658edd69e2d1d3de3c857d2");
metadata.set("x-honeycomb-dataset", "TPBR_DATASET");

// The Trace Exporter exports the data to Honeycomb by providing the metadata + url information

const traceExporter = new OTLPTraceExporter({
    url: "grpc://api.honeycomb.io:443/",
    credentials: credentials.createSsl(),
    metadata,
});

// The service name is passed using a the resource package
// which is an attribute that apply to all spans generated by a process.

const sdk = new NodeSDK({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: "TPBR",
    }),
    traceExporter,
    // Instrumentations allow you to add auto-instrumentation packages
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start()
    .then(() => console.log("Tracing initialized"))
    .catch((error) => console.log("Error initializing tracing", error));

process.on("SIGTERM", () => {
    sdk.shutdown()
        .then(() => console.log("Tracing terminated"))
        .catch((error) => console.log("Error terminating tracing", error))
        .finally(() => process.exit(0));
});
