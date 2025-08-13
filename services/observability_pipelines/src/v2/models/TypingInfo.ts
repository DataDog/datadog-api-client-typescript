import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AzureStorageDestination } from "./AzureStorageDestination";
import { ListPipelinesResponse } from "./ListPipelinesResponse";
import { ListPipelinesResponseMeta } from "./ListPipelinesResponseMeta";
import { MicrosoftSentinelDestination } from "./MicrosoftSentinelDestination";
import { ObservabilityPipeline } from "./ObservabilityPipeline";
import { ObservabilityPipelineAddEnvVarsProcessor } from "./ObservabilityPipelineAddEnvVarsProcessor";
import { ObservabilityPipelineAddEnvVarsProcessorVariable } from "./ObservabilityPipelineAddEnvVarsProcessorVariable";
import { ObservabilityPipelineAddFieldsProcessor } from "./ObservabilityPipelineAddFieldsProcessor";
import { ObservabilityPipelineAmazonDataFirehoseSource } from "./ObservabilityPipelineAmazonDataFirehoseSource";
import { ObservabilityPipelineAmazonOpenSearchDestination } from "./ObservabilityPipelineAmazonOpenSearchDestination";
import { ObservabilityPipelineAmazonOpenSearchDestinationAuth } from "./ObservabilityPipelineAmazonOpenSearchDestinationAuth";
import { ObservabilityPipelineAmazonS3Destination } from "./ObservabilityPipelineAmazonS3Destination";
import { ObservabilityPipelineAmazonS3Source } from "./ObservabilityPipelineAmazonS3Source";
import { ObservabilityPipelineAmazonSecurityLakeDestination } from "./ObservabilityPipelineAmazonSecurityLakeDestination";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";
import { ObservabilityPipelineConfig } from "./ObservabilityPipelineConfig";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestination } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestination";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression";
import { ObservabilityPipelineCustomProcessor } from "./ObservabilityPipelineCustomProcessor";
import { ObservabilityPipelineCustomProcessorRemap } from "./ObservabilityPipelineCustomProcessorRemap";
import { ObservabilityPipelineData } from "./ObservabilityPipelineData";
import { ObservabilityPipelineDataAttributes } from "./ObservabilityPipelineDataAttributes";
import { ObservabilityPipelineDatadogAgentSource } from "./ObservabilityPipelineDatadogAgentSource";
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineDatadogTagsProcessor } from "./ObservabilityPipelineDatadogTagsProcessor";
import { ObservabilityPipelineDedupeProcessor } from "./ObservabilityPipelineDedupeProcessor";
import { ObservabilityPipelineElasticsearchDestination } from "./ObservabilityPipelineElasticsearchDestination";
import { ObservabilityPipelineEnrichmentTableFile } from "./ObservabilityPipelineEnrichmentTableFile";
import { ObservabilityPipelineEnrichmentTableFileEncoding } from "./ObservabilityPipelineEnrichmentTableFileEncoding";
import { ObservabilityPipelineEnrichmentTableFileKeyItems } from "./ObservabilityPipelineEnrichmentTableFileKeyItems";
import { ObservabilityPipelineEnrichmentTableFileSchemaItems } from "./ObservabilityPipelineEnrichmentTableFileSchemaItems";
import { ObservabilityPipelineEnrichmentTableGeoIp } from "./ObservabilityPipelineEnrichmentTableGeoIp";
import { ObservabilityPipelineEnrichmentTableProcessor } from "./ObservabilityPipelineEnrichmentTableProcessor";
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";
import { ObservabilityPipelineFilterProcessor } from "./ObservabilityPipelineFilterProcessor";
import { ObservabilityPipelineFluentBitSource } from "./ObservabilityPipelineFluentBitSource";
import { ObservabilityPipelineFluentdSource } from "./ObservabilityPipelineFluentdSource";
import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGenerateMetricsProcessor } from "./ObservabilityPipelineGenerateMetricsProcessor";
import { ObservabilityPipelineGeneratedMetric } from "./ObservabilityPipelineGeneratedMetric";
import { ObservabilityPipelineGeneratedMetricIncrementByField } from "./ObservabilityPipelineGeneratedMetricIncrementByField";
import { ObservabilityPipelineGeneratedMetricIncrementByOne } from "./ObservabilityPipelineGeneratedMetricIncrementByOne";
import { ObservabilityPipelineGoogleChronicleDestination } from "./ObservabilityPipelineGoogleChronicleDestination";
import { ObservabilityPipelineGoogleCloudStorageDestination } from "./ObservabilityPipelineGoogleCloudStorageDestination";
import { ObservabilityPipelineGooglePubSubSource } from "./ObservabilityPipelineGooglePubSubSource";
import { ObservabilityPipelineHttpClientSource } from "./ObservabilityPipelineHttpClientSource";
import { ObservabilityPipelineHttpServerSource } from "./ObservabilityPipelineHttpServerSource";
import { ObservabilityPipelineKafkaSource } from "./ObservabilityPipelineKafkaSource";
import { ObservabilityPipelineKafkaSourceLibrdkafkaOption } from "./ObservabilityPipelineKafkaSourceLibrdkafkaOption";
import { ObservabilityPipelineKafkaSourceSasl } from "./ObservabilityPipelineKafkaSourceSasl";
import { ObservabilityPipelineLogstashSource } from "./ObservabilityPipelineLogstashSource";
import { ObservabilityPipelineMetadataEntry } from "./ObservabilityPipelineMetadataEntry";
import { ObservabilityPipelineNewRelicDestination } from "./ObservabilityPipelineNewRelicDestination";
import { ObservabilityPipelineOcsfMapperProcessor } from "./ObservabilityPipelineOcsfMapperProcessor";
import { ObservabilityPipelineOcsfMapperProcessorMapping } from "./ObservabilityPipelineOcsfMapperProcessorMapping";
import { ObservabilityPipelineOpenSearchDestination } from "./ObservabilityPipelineOpenSearchDestination";
import { ObservabilityPipelineParseGrokProcessor } from "./ObservabilityPipelineParseGrokProcessor";
import { ObservabilityPipelineParseGrokProcessorRule } from "./ObservabilityPipelineParseGrokProcessorRule";
import { ObservabilityPipelineParseGrokProcessorRuleMatchRule } from "./ObservabilityPipelineParseGrokProcessorRuleMatchRule";
import { ObservabilityPipelineParseGrokProcessorRuleSupportRule } from "./ObservabilityPipelineParseGrokProcessorRuleSupportRule";
import { ObservabilityPipelineParseJSONProcessor } from "./ObservabilityPipelineParseJSONProcessor";
import { ObservabilityPipelineQuotaProcessor } from "./ObservabilityPipelineQuotaProcessor";
import { ObservabilityPipelineQuotaProcessorLimit } from "./ObservabilityPipelineQuotaProcessorLimit";
import { ObservabilityPipelineQuotaProcessorOverride } from "./ObservabilityPipelineQuotaProcessorOverride";
import { ObservabilityPipelineReduceProcessor } from "./ObservabilityPipelineReduceProcessor";
import { ObservabilityPipelineReduceProcessorMergeStrategy } from "./ObservabilityPipelineReduceProcessorMergeStrategy";
import { ObservabilityPipelineRemoveFieldsProcessor } from "./ObservabilityPipelineRemoveFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessor } from "./ObservabilityPipelineRenameFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessorField } from "./ObservabilityPipelineRenameFieldsProcessorField";
import { ObservabilityPipelineRsyslogDestination } from "./ObservabilityPipelineRsyslogDestination";
import { ObservabilityPipelineRsyslogSource } from "./ObservabilityPipelineRsyslogSource";
import { ObservabilityPipelineSampleProcessor } from "./ObservabilityPipelineSampleProcessor";
import { ObservabilityPipelineSensitiveDataScannerProcessor } from "./ObservabilityPipelineSensitiveDataScannerProcessor";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionHash } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionHash";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionRedact } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionRedact";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern";
import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern";
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorRule } from "./ObservabilityPipelineSensitiveDataScannerProcessorRule";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeAll } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeAll";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions";
import { ObservabilityPipelineSentinelOneDestination } from "./ObservabilityPipelineSentinelOneDestination";
import { ObservabilityPipelineSocketDestination } from "./ObservabilityPipelineSocketDestination";
import { ObservabilityPipelineSocketDestinationFramingBytes } from "./ObservabilityPipelineSocketDestinationFramingBytes";
import { ObservabilityPipelineSocketDestinationFramingCharacterDelimited } from "./ObservabilityPipelineSocketDestinationFramingCharacterDelimited";
import { ObservabilityPipelineSocketDestinationFramingNewlineDelimited } from "./ObservabilityPipelineSocketDestinationFramingNewlineDelimited";
import { ObservabilityPipelineSocketSource } from "./ObservabilityPipelineSocketSource";
import { ObservabilityPipelineSocketSourceFramingBytes } from "./ObservabilityPipelineSocketSourceFramingBytes";
import { ObservabilityPipelineSocketSourceFramingCharacterDelimited } from "./ObservabilityPipelineSocketSourceFramingCharacterDelimited";
import { ObservabilityPipelineSocketSourceFramingChunkedGelf } from "./ObservabilityPipelineSocketSourceFramingChunkedGelf";
import { ObservabilityPipelineSocketSourceFramingNewlineDelimited } from "./ObservabilityPipelineSocketSourceFramingNewlineDelimited";
import { ObservabilityPipelineSocketSourceFramingOctetCounting } from "./ObservabilityPipelineSocketSourceFramingOctetCounting";
import { ObservabilityPipelineSpec } from "./ObservabilityPipelineSpec";
import { ObservabilityPipelineSpecData } from "./ObservabilityPipelineSpecData";
import { ObservabilityPipelineSplunkHecDestination } from "./ObservabilityPipelineSplunkHecDestination";
import { ObservabilityPipelineSplunkHecSource } from "./ObservabilityPipelineSplunkHecSource";
import { ObservabilityPipelineSplunkTcpSource } from "./ObservabilityPipelineSplunkTcpSource";
import { ObservabilityPipelineSumoLogicDestination } from "./ObservabilityPipelineSumoLogicDestination";
import { ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem } from "./ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem";
import { ObservabilityPipelineSumoLogicSource } from "./ObservabilityPipelineSumoLogicSource";
import { ObservabilityPipelineSyslogNgDestination } from "./ObservabilityPipelineSyslogNgDestination";
import { ObservabilityPipelineSyslogNgSource } from "./ObservabilityPipelineSyslogNgSource";
import { ObservabilityPipelineThrottleProcessor } from "./ObservabilityPipelineThrottleProcessor";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";
import { ValidationError } from "./ValidationError";
import { ValidationErrorMeta } from "./ValidationErrorMeta";
import { ValidationResponse } from "./ValidationResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AzureStorageDestinationType: ["azure_storage"],
    MicrosoftSentinelDestinationType: ["microsoft_sentinel"],
    ObservabilityPipelineAddEnvVarsProcessorType: ["add_env_vars"],
    ObservabilityPipelineAddFieldsProcessorType: ["add_fields"],
    ObservabilityPipelineAmazonDataFirehoseSourceType: ["amazon_data_firehose"],
    ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy: [
      "basic",
      "aws",
    ],
    ObservabilityPipelineAmazonOpenSearchDestinationType: ["amazon_opensearch"],
    ObservabilityPipelineAmazonS3DestinationStorageClass: [
      "STANDARD",
      "REDUCED_REDUNDANCY",
      "INTELLIGENT_TIERING",
      "STANDARD_IA",
      "EXPRESS_ONEZONE",
      "ONEZONE_IA",
      "GLACIER",
      "GLACIER_IR",
      "DEEP_ARCHIVE",
    ],
    ObservabilityPipelineAmazonS3DestinationType: ["amazon_s3"],
    ObservabilityPipelineAmazonS3SourceType: ["amazon_s3"],
    ObservabilityPipelineAmazonSecurityLakeDestinationType: [
      "amazon_security_lake",
    ],
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm:
      ["gzip", "zlib"],
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding: [
      "json",
      "raw_message",
    ],
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType: [
      "crowdstrike_next_gen_siem",
    ],
    ObservabilityPipelineCustomProcessorType: ["custom_processor"],
    ObservabilityPipelineDatadogAgentSourceType: ["datadog_agent"],
    ObservabilityPipelineDatadogLogsDestinationType: ["datadog_logs"],
    ObservabilityPipelineDatadogTagsProcessorAction: ["include", "exclude"],
    ObservabilityPipelineDatadogTagsProcessorMode: ["filter"],
    ObservabilityPipelineDatadogTagsProcessorType: ["datadog_tags"],
    ObservabilityPipelineDecoding: ["bytes", "gelf", "json", "syslog"],
    ObservabilityPipelineDedupeProcessorMode: ["match", "ignore"],
    ObservabilityPipelineDedupeProcessorType: ["dedupe"],
    ObservabilityPipelineElasticsearchDestinationApiVersion: [
      "auto",
      "v6",
      "v7",
      "v8",
    ],
    ObservabilityPipelineElasticsearchDestinationType: ["elasticsearch"],
    ObservabilityPipelineEnrichmentTableFileEncodingType: ["csv"],
    ObservabilityPipelineEnrichmentTableFileKeyItemsComparison: ["equals"],
    ObservabilityPipelineEnrichmentTableFileSchemaItemsType: [
      "string",
      "boolean",
      "integer",
      "float",
      "date",
      "timestamp",
    ],
    ObservabilityPipelineEnrichmentTableProcessorType: ["enrichment_table"],
    ObservabilityPipelineFilterProcessorType: ["filter"],
    ObservabilityPipelineFluentBitSourceType: ["fluent_bit"],
    ObservabilityPipelineFluentdSourceType: ["fluentd"],
    ObservabilityPipelineGenerateMetricsProcessorType: [
      "generate_datadog_metrics",
    ],
    ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy: [
      "increment_by_field",
    ],
    ObservabilityPipelineGeneratedMetricIncrementByOneStrategy: [
      "increment_by_one",
    ],
    ObservabilityPipelineGeneratedMetricMetricType: [
      "count",
      "gauge",
      "distribution",
    ],
    ObservabilityPipelineGoogleChronicleDestinationEncoding: [
      "json",
      "raw_message",
    ],
    ObservabilityPipelineGoogleChronicleDestinationType: ["google_chronicle"],
    ObservabilityPipelineGoogleCloudStorageDestinationAcl: [
      "private",
      "project-private",
      "public-read",
      "authenticated-read",
      "bucket-owner-read",
      "bucket-owner-full-control",
    ],
    ObservabilityPipelineGoogleCloudStorageDestinationStorageClass: [
      "STANDARD",
      "NEARLINE",
      "COLDLINE",
      "ARCHIVE",
    ],
    ObservabilityPipelineGoogleCloudStorageDestinationType: [
      "google_cloud_storage",
    ],
    ObservabilityPipelineGooglePubSubSourceType: ["google_pubsub"],
    ObservabilityPipelineHttpClientSourceAuthStrategy: ["basic", "bearer"],
    ObservabilityPipelineHttpClientSourceType: ["http_client"],
    ObservabilityPipelineHttpServerSourceAuthStrategy: ["none", "plain"],
    ObservabilityPipelineHttpServerSourceType: ["http_server"],
    ObservabilityPipelineKafkaSourceType: ["kafka"],
    ObservabilityPipelineLogstashSourceType: ["logstash"],
    ObservabilityPipelineNewRelicDestinationRegion: ["us", "eu"],
    ObservabilityPipelineNewRelicDestinationType: ["new_relic"],
    ObservabilityPipelineOcsfMapperProcessorType: ["ocsf_mapper"],
    ObservabilityPipelineOcsfMappingLibrary: [
      "CloudTrail Account Change",
      "GCP Cloud Audit CreateBucket",
      "GCP Cloud Audit CreateSink",
      "GCP Cloud Audit SetIamPolicy",
      "GCP Cloud Audit UpdateSink",
      "Github Audit Log API Activity",
      "Google Workspace Admin Audit addPrivilege",
      "Microsoft 365 Defender Incident",
      "Microsoft 365 Defender UserLoggedIn",
      "Okta System Log Authentication",
      "Palo Alto Networks Firewall Traffic",
    ],
    ObservabilityPipelineOpenSearchDestinationType: ["opensearch"],
    ObservabilityPipelineParseGrokProcessorType: ["parse_grok"],
    ObservabilityPipelineParseJSONProcessorType: ["parse_json"],
    ObservabilityPipelinePipelineKafkaSourceSaslMechanism: [
      "PLAIN",
      "SCRAM-SHA-256",
      "SCRAM-SHA-512",
    ],
    ObservabilityPipelineQuotaProcessorLimitEnforceType: ["bytes", "events"],
    ObservabilityPipelineQuotaProcessorOverflowAction: [
      "drop",
      "no_action",
      "overflow_routing",
    ],
    ObservabilityPipelineQuotaProcessorType: ["quota"],
    ObservabilityPipelineReduceProcessorMergeStrategyStrategy: [
      "discard",
      "retain",
      "sum",
      "max",
      "min",
      "array",
      "concat",
      "concat_newline",
      "concat_raw",
      "shortest_array",
      "longest_array",
      "flat_unique",
    ],
    ObservabilityPipelineReduceProcessorType: ["reduce"],
    ObservabilityPipelineRemoveFieldsProcessorType: ["remove_fields"],
    ObservabilityPipelineRenameFieldsProcessorType: ["rename_fields"],
    ObservabilityPipelineRsyslogDestinationType: ["rsyslog"],
    ObservabilityPipelineRsyslogSourceType: ["rsyslog"],
    ObservabilityPipelineSampleProcessorType: ["sample"],
    ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction: [
      "hash",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction:
      ["partial_redact"],
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection:
      ["first", "last"],
    ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction: [
      "redact",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType: [
      "custom",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType: [
      "library",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget: ["all"],
    ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget: [
      "exclude",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget: [
      "include",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorType: [
      "sensitive_data_scanner",
    ],
    ObservabilityPipelineSentinelOneDestinationRegion: [
      "us",
      "eu",
      "ca",
      "data_set_us",
    ],
    ObservabilityPipelineSentinelOneDestinationType: ["sentinel_one"],
    ObservabilityPipelineSocketDestinationEncoding: ["json", "raw_message"],
    ObservabilityPipelineSocketDestinationFramingBytesMethod: ["bytes"],
    ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod: [
      "character_delimited",
    ],
    ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod: [
      "newline_delimited",
    ],
    ObservabilityPipelineSocketDestinationMode: ["tcp", "udp"],
    ObservabilityPipelineSocketDestinationType: ["socket"],
    ObservabilityPipelineSocketSourceFramingBytesMethod: ["bytes"],
    ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod: [
      "character_delimited",
    ],
    ObservabilityPipelineSocketSourceFramingChunkedGelfMethod: ["chunked_gelf"],
    ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod: [
      "newline_delimited",
    ],
    ObservabilityPipelineSocketSourceFramingOctetCountingMethod: [
      "octet_counting",
    ],
    ObservabilityPipelineSocketSourceMode: ["tcp", "udp"],
    ObservabilityPipelineSocketSourceType: ["socket"],
    ObservabilityPipelineSplunkHecDestinationEncoding: ["json", "raw_message"],
    ObservabilityPipelineSplunkHecDestinationType: ["splunk_hec"],
    ObservabilityPipelineSplunkHecSourceType: ["splunk_hec"],
    ObservabilityPipelineSplunkTcpSourceType: ["splunk_tcp"],
    ObservabilityPipelineSumoLogicDestinationEncoding: [
      "json",
      "raw_message",
      "logfmt",
    ],
    ObservabilityPipelineSumoLogicDestinationType: ["sumo_logic"],
    ObservabilityPipelineSumoLogicSourceType: ["sumo_logic"],
    ObservabilityPipelineSyslogNgDestinationType: ["syslog_ng"],
    ObservabilityPipelineSyslogNgSourceType: ["syslog_ng"],
    ObservabilityPipelineSyslogSourceMode: ["tcp", "udp"],
    ObservabilityPipelineThrottleProcessorType: ["throttle"],
  },
  oneOfMap: {
    ObservabilityPipelineConfigDestinationItem: [
      "ObservabilityPipelineDatadogLogsDestination",
      "ObservabilityPipelineAmazonS3Destination",
      "ObservabilityPipelineGoogleCloudStorageDestination",
      "ObservabilityPipelineSplunkHecDestination",
      "ObservabilityPipelineSumoLogicDestination",
      "ObservabilityPipelineElasticsearchDestination",
      "ObservabilityPipelineRsyslogDestination",
      "ObservabilityPipelineSyslogNgDestination",
      "AzureStorageDestination",
      "MicrosoftSentinelDestination",
      "ObservabilityPipelineGoogleChronicleDestination",
      "ObservabilityPipelineNewRelicDestination",
      "ObservabilityPipelineSentinelOneDestination",
      "ObservabilityPipelineOpenSearchDestination",
      "ObservabilityPipelineAmazonOpenSearchDestination",
      "ObservabilityPipelineSocketDestination",
      "ObservabilityPipelineAmazonSecurityLakeDestination",
      "ObservabilityPipelineCrowdStrikeNextGenSiemDestination",
    ],
    ObservabilityPipelineConfigProcessorItem: [
      "ObservabilityPipelineFilterProcessor",
      "ObservabilityPipelineParseJSONProcessor",
      "ObservabilityPipelineQuotaProcessor",
      "ObservabilityPipelineAddFieldsProcessor",
      "ObservabilityPipelineRemoveFieldsProcessor",
      "ObservabilityPipelineRenameFieldsProcessor",
      "ObservabilityPipelineGenerateMetricsProcessor",
      "ObservabilityPipelineSampleProcessor",
      "ObservabilityPipelineParseGrokProcessor",
      "ObservabilityPipelineSensitiveDataScannerProcessor",
      "ObservabilityPipelineOcsfMapperProcessor",
      "ObservabilityPipelineAddEnvVarsProcessor",
      "ObservabilityPipelineDedupeProcessor",
      "ObservabilityPipelineEnrichmentTableProcessor",
      "ObservabilityPipelineReduceProcessor",
      "ObservabilityPipelineThrottleProcessor",
      "ObservabilityPipelineCustomProcessor",
      "ObservabilityPipelineDatadogTagsProcessor",
    ],
    ObservabilityPipelineConfigSourceItem: [
      "ObservabilityPipelineKafkaSource",
      "ObservabilityPipelineDatadogAgentSource",
      "ObservabilityPipelineSplunkTcpSource",
      "ObservabilityPipelineSplunkHecSource",
      "ObservabilityPipelineAmazonS3Source",
      "ObservabilityPipelineFluentdSource",
      "ObservabilityPipelineFluentBitSource",
      "ObservabilityPipelineHttpServerSource",
      "ObservabilityPipelineSumoLogicSource",
      "ObservabilityPipelineRsyslogSource",
      "ObservabilityPipelineSyslogNgSource",
      "ObservabilityPipelineAmazonDataFirehoseSource",
      "ObservabilityPipelineGooglePubSubSource",
      "ObservabilityPipelineHttpClientSource",
      "ObservabilityPipelineLogstashSource",
      "ObservabilityPipelineSocketSource",
    ],
    ObservabilityPipelineMetricValue: [
      "ObservabilityPipelineGeneratedMetricIncrementByOne",
      "ObservabilityPipelineGeneratedMetricIncrementByField",
    ],
    ObservabilityPipelineOcsfMapperProcessorMappingMapping: [
      "ObservabilityPipelineOcsfMappingLibrary",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorAction: [
      "ObservabilityPipelineSensitiveDataScannerProcessorActionRedact",
      "ObservabilityPipelineSensitiveDataScannerProcessorActionHash",
      "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorPattern: [
      "ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern",
      "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorScope: [
      "ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude",
      "ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude",
      "ObservabilityPipelineSensitiveDataScannerProcessorScopeAll",
    ],
    ObservabilityPipelineSocketDestinationFraming: [
      "ObservabilityPipelineSocketDestinationFramingNewlineDelimited",
      "ObservabilityPipelineSocketDestinationFramingBytes",
      "ObservabilityPipelineSocketDestinationFramingCharacterDelimited",
    ],
    ObservabilityPipelineSocketSourceFraming: [
      "ObservabilityPipelineSocketSourceFramingNewlineDelimited",
      "ObservabilityPipelineSocketSourceFramingBytes",
      "ObservabilityPipelineSocketSourceFramingCharacterDelimited",
      "ObservabilityPipelineSocketSourceFramingOctetCounting",
      "ObservabilityPipelineSocketSourceFramingChunkedGelf",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AzureStorageDestination: AzureStorageDestination,
    ListPipelinesResponse: ListPipelinesResponse,
    ListPipelinesResponseMeta: ListPipelinesResponseMeta,
    MicrosoftSentinelDestination: MicrosoftSentinelDestination,
    ObservabilityPipeline: ObservabilityPipeline,
    ObservabilityPipelineAddEnvVarsProcessor:
      ObservabilityPipelineAddEnvVarsProcessor,
    ObservabilityPipelineAddEnvVarsProcessorVariable:
      ObservabilityPipelineAddEnvVarsProcessorVariable,
    ObservabilityPipelineAddFieldsProcessor:
      ObservabilityPipelineAddFieldsProcessor,
    ObservabilityPipelineAmazonDataFirehoseSource:
      ObservabilityPipelineAmazonDataFirehoseSource,
    ObservabilityPipelineAmazonOpenSearchDestination:
      ObservabilityPipelineAmazonOpenSearchDestination,
    ObservabilityPipelineAmazonOpenSearchDestinationAuth:
      ObservabilityPipelineAmazonOpenSearchDestinationAuth,
    ObservabilityPipelineAmazonS3Destination:
      ObservabilityPipelineAmazonS3Destination,
    ObservabilityPipelineAmazonS3Source: ObservabilityPipelineAmazonS3Source,
    ObservabilityPipelineAmazonSecurityLakeDestination:
      ObservabilityPipelineAmazonSecurityLakeDestination,
    ObservabilityPipelineAwsAuth: ObservabilityPipelineAwsAuth,
    ObservabilityPipelineConfig: ObservabilityPipelineConfig,
    ObservabilityPipelineCrowdStrikeNextGenSiemDestination:
      ObservabilityPipelineCrowdStrikeNextGenSiemDestination,
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression:
      ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression,
    ObservabilityPipelineCustomProcessor: ObservabilityPipelineCustomProcessor,
    ObservabilityPipelineCustomProcessorRemap:
      ObservabilityPipelineCustomProcessorRemap,
    ObservabilityPipelineData: ObservabilityPipelineData,
    ObservabilityPipelineDataAttributes: ObservabilityPipelineDataAttributes,
    ObservabilityPipelineDatadogAgentSource:
      ObservabilityPipelineDatadogAgentSource,
    ObservabilityPipelineDatadogLogsDestination:
      ObservabilityPipelineDatadogLogsDestination,
    ObservabilityPipelineDatadogTagsProcessor:
      ObservabilityPipelineDatadogTagsProcessor,
    ObservabilityPipelineDedupeProcessor: ObservabilityPipelineDedupeProcessor,
    ObservabilityPipelineElasticsearchDestination:
      ObservabilityPipelineElasticsearchDestination,
    ObservabilityPipelineEnrichmentTableFile:
      ObservabilityPipelineEnrichmentTableFile,
    ObservabilityPipelineEnrichmentTableFileEncoding:
      ObservabilityPipelineEnrichmentTableFileEncoding,
    ObservabilityPipelineEnrichmentTableFileKeyItems:
      ObservabilityPipelineEnrichmentTableFileKeyItems,
    ObservabilityPipelineEnrichmentTableFileSchemaItems:
      ObservabilityPipelineEnrichmentTableFileSchemaItems,
    ObservabilityPipelineEnrichmentTableGeoIp:
      ObservabilityPipelineEnrichmentTableGeoIp,
    ObservabilityPipelineEnrichmentTableProcessor:
      ObservabilityPipelineEnrichmentTableProcessor,
    ObservabilityPipelineFieldValue: ObservabilityPipelineFieldValue,
    ObservabilityPipelineFilterProcessor: ObservabilityPipelineFilterProcessor,
    ObservabilityPipelineFluentBitSource: ObservabilityPipelineFluentBitSource,
    ObservabilityPipelineFluentdSource: ObservabilityPipelineFluentdSource,
    ObservabilityPipelineGcpAuth: ObservabilityPipelineGcpAuth,
    ObservabilityPipelineGenerateMetricsProcessor:
      ObservabilityPipelineGenerateMetricsProcessor,
    ObservabilityPipelineGeneratedMetric: ObservabilityPipelineGeneratedMetric,
    ObservabilityPipelineGeneratedMetricIncrementByField:
      ObservabilityPipelineGeneratedMetricIncrementByField,
    ObservabilityPipelineGeneratedMetricIncrementByOne:
      ObservabilityPipelineGeneratedMetricIncrementByOne,
    ObservabilityPipelineGoogleChronicleDestination:
      ObservabilityPipelineGoogleChronicleDestination,
    ObservabilityPipelineGoogleCloudStorageDestination:
      ObservabilityPipelineGoogleCloudStorageDestination,
    ObservabilityPipelineGooglePubSubSource:
      ObservabilityPipelineGooglePubSubSource,
    ObservabilityPipelineHttpClientSource:
      ObservabilityPipelineHttpClientSource,
    ObservabilityPipelineHttpServerSource:
      ObservabilityPipelineHttpServerSource,
    ObservabilityPipelineKafkaSource: ObservabilityPipelineKafkaSource,
    ObservabilityPipelineKafkaSourceLibrdkafkaOption:
      ObservabilityPipelineKafkaSourceLibrdkafkaOption,
    ObservabilityPipelineKafkaSourceSasl: ObservabilityPipelineKafkaSourceSasl,
    ObservabilityPipelineLogstashSource: ObservabilityPipelineLogstashSource,
    ObservabilityPipelineMetadataEntry: ObservabilityPipelineMetadataEntry,
    ObservabilityPipelineNewRelicDestination:
      ObservabilityPipelineNewRelicDestination,
    ObservabilityPipelineOcsfMapperProcessor:
      ObservabilityPipelineOcsfMapperProcessor,
    ObservabilityPipelineOcsfMapperProcessorMapping:
      ObservabilityPipelineOcsfMapperProcessorMapping,
    ObservabilityPipelineOpenSearchDestination:
      ObservabilityPipelineOpenSearchDestination,
    ObservabilityPipelineParseGrokProcessor:
      ObservabilityPipelineParseGrokProcessor,
    ObservabilityPipelineParseGrokProcessorRule:
      ObservabilityPipelineParseGrokProcessorRule,
    ObservabilityPipelineParseGrokProcessorRuleMatchRule:
      ObservabilityPipelineParseGrokProcessorRuleMatchRule,
    ObservabilityPipelineParseGrokProcessorRuleSupportRule:
      ObservabilityPipelineParseGrokProcessorRuleSupportRule,
    ObservabilityPipelineParseJSONProcessor:
      ObservabilityPipelineParseJSONProcessor,
    ObservabilityPipelineQuotaProcessor: ObservabilityPipelineQuotaProcessor,
    ObservabilityPipelineQuotaProcessorLimit:
      ObservabilityPipelineQuotaProcessorLimit,
    ObservabilityPipelineQuotaProcessorOverride:
      ObservabilityPipelineQuotaProcessorOverride,
    ObservabilityPipelineReduceProcessor: ObservabilityPipelineReduceProcessor,
    ObservabilityPipelineReduceProcessorMergeStrategy:
      ObservabilityPipelineReduceProcessorMergeStrategy,
    ObservabilityPipelineRemoveFieldsProcessor:
      ObservabilityPipelineRemoveFieldsProcessor,
    ObservabilityPipelineRenameFieldsProcessor:
      ObservabilityPipelineRenameFieldsProcessor,
    ObservabilityPipelineRenameFieldsProcessorField:
      ObservabilityPipelineRenameFieldsProcessorField,
    ObservabilityPipelineRsyslogDestination:
      ObservabilityPipelineRsyslogDestination,
    ObservabilityPipelineRsyslogSource: ObservabilityPipelineRsyslogSource,
    ObservabilityPipelineSampleProcessor: ObservabilityPipelineSampleProcessor,
    ObservabilityPipelineSensitiveDataScannerProcessor:
      ObservabilityPipelineSensitiveDataScannerProcessor,
    ObservabilityPipelineSensitiveDataScannerProcessorActionHash:
      ObservabilityPipelineSensitiveDataScannerProcessorActionHash,
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact:
      ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact,
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions:
      ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorActionRedact:
      ObservabilityPipelineSensitiveDataScannerProcessorActionRedact,
    ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions:
      ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern:
      ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern,
    ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions:
      ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions:
      ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern:
      ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern,
    ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions:
      ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorRule:
      ObservabilityPipelineSensitiveDataScannerProcessorRule,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeAll:
      ObservabilityPipelineSensitiveDataScannerProcessorScopeAll,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude:
      ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude:
      ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions:
      ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions,
    ObservabilityPipelineSentinelOneDestination:
      ObservabilityPipelineSentinelOneDestination,
    ObservabilityPipelineSocketDestination:
      ObservabilityPipelineSocketDestination,
    ObservabilityPipelineSocketDestinationFramingBytes:
      ObservabilityPipelineSocketDestinationFramingBytes,
    ObservabilityPipelineSocketDestinationFramingCharacterDelimited:
      ObservabilityPipelineSocketDestinationFramingCharacterDelimited,
    ObservabilityPipelineSocketDestinationFramingNewlineDelimited:
      ObservabilityPipelineSocketDestinationFramingNewlineDelimited,
    ObservabilityPipelineSocketSource: ObservabilityPipelineSocketSource,
    ObservabilityPipelineSocketSourceFramingBytes:
      ObservabilityPipelineSocketSourceFramingBytes,
    ObservabilityPipelineSocketSourceFramingCharacterDelimited:
      ObservabilityPipelineSocketSourceFramingCharacterDelimited,
    ObservabilityPipelineSocketSourceFramingChunkedGelf:
      ObservabilityPipelineSocketSourceFramingChunkedGelf,
    ObservabilityPipelineSocketSourceFramingNewlineDelimited:
      ObservabilityPipelineSocketSourceFramingNewlineDelimited,
    ObservabilityPipelineSocketSourceFramingOctetCounting:
      ObservabilityPipelineSocketSourceFramingOctetCounting,
    ObservabilityPipelineSpec: ObservabilityPipelineSpec,
    ObservabilityPipelineSpecData: ObservabilityPipelineSpecData,
    ObservabilityPipelineSplunkHecDestination:
      ObservabilityPipelineSplunkHecDestination,
    ObservabilityPipelineSplunkHecSource: ObservabilityPipelineSplunkHecSource,
    ObservabilityPipelineSplunkTcpSource: ObservabilityPipelineSplunkTcpSource,
    ObservabilityPipelineSumoLogicDestination:
      ObservabilityPipelineSumoLogicDestination,
    ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem:
      ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem,
    ObservabilityPipelineSumoLogicSource: ObservabilityPipelineSumoLogicSource,
    ObservabilityPipelineSyslogNgDestination:
      ObservabilityPipelineSyslogNgDestination,
    ObservabilityPipelineSyslogNgSource: ObservabilityPipelineSyslogNgSource,
    ObservabilityPipelineThrottleProcessor:
      ObservabilityPipelineThrottleProcessor,
    ObservabilityPipelineTls: ObservabilityPipelineTls,
    ValidationError: ValidationError,
    ValidationErrorMeta: ValidationErrorMeta,
    ValidationResponse: ValidationResponse,
  },
};
