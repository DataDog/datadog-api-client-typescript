/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Application Security details describing a service in a given environment.
 */
export class ApplicationSecurityServiceAttributes {
  /**
   * The Datadog Agent versions reporting for the service.
   */
  "agentVersions": Array<string>;
  /**
   * The application type of the service, such as `web` or `serverless`.
   */
  "appType": string;
  /**
   * Whether the service is compatible with Application Security Management (Threats).
   */
  "asmThreatCompatible": boolean;
  /**
   * The number of backend WAF events detected for the service.
   */
  "backendWafEventCount": number;
  /**
   * The enabled business logic detection rules for the service.
   */
  "businessLogic": Array<string>;
  /**
   * Deprecated: a display color associated with the service in the UI.
   */
  "color": string;
  /**
   * The environment the service runs in.
   */
  "env": string;
  /**
   * The number of Application Security events detected for the service.
   */
  "eventCount": number;
  /**
   * Deprecated: the trend of Application Security events over time.
   */
  "eventTrend": Array<number>;
  /**
   * Whether Application Security Management (Threats) is enabled for the service.
   */
  "hasAppsecEnabled": boolean;
  /**
   * Deprecated: the number of hits for the service.
   */
  "hits": number;
  /**
   * Whether Interactive Application Security Testing (IAST) is enabled for the service.
   */
  "iastProductActivation": boolean;
  /**
   * The Interactive Application Security Testing (IAST) compatibility status of the service.
   */
  "iastProductCompatibility": string;
  /**
   * The reasons explaining the Interactive Application Security Testing (IAST) compatibility status.
   */
  "iastProductCompatibilityReasons": Array<string>;
  /**
   * The programming languages detected for the service.
   */
  "languages": Array<string>;
  /**
   * The Unix timestamp, in seconds, of the last ingested span for the service.
   */
  "lastIngestedSpans": number;
  /**
   * The Remote Configuration capabilities reported by the service.
   */
  "rcCapabilities": Array<string>;
  /**
   * The recommended business logic detection rules for the service.
   */
  "recommendedBusinessLogic": Array<string>;
  /**
   * Whether Software Composition Analysis (SCA) is enabled for the service.
   */
  "riskProductActivation": boolean;
  /**
   * The Software Composition Analysis (SCA) compatibility status of the service.
   */
  "riskProductCompatibility": string;
  /**
   * The reasons explaining the Software Composition Analysis (SCA) compatibility status.
   */
  "riskProductCompatibilityReasons": Array<string>;
  /**
   * The WAF rules versions applied to the service.
   */
  "rulesVersion": Array<string>;
  /**
   * The name of the service.
   */
  "service": string;
  /**
   * Deprecated: the number of security signals for the service.
   */
  "signalCount": number;
  /**
   * Deprecated: the trend of security signals over time.
   */
  "signalTrend": Array<number>;
  /**
   * The data sources that contributed information about the service.
   */
  "source": Array<string>;
  /**
   * The teams that own the service.
   */
  "teams": Array<string>;
  /**
   * The Datadog tracing library versions reporting for the service.
   */
  "tracerVersions": Array<string>;
  /**
   * The Vulnerability Management activation status of the service.
   */
  "vmActivation": string;
  /**
   * Deprecated: the number of critical-severity vulnerabilities for the service.
   */
  "vulnCriticalCount": number;
  /**
   * Deprecated: the number of high-severity vulnerabilities for the service.
   */
  "vulnHighCount": number;
  /**
   * The total number of services available without applying the service filter.
   */
  "withoutFilterServices": number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agentVersions: {
      baseName: "agent_versions",
      type: "Array<string>",
      required: true,
    },
    appType: {
      baseName: "app_type",
      type: "string",
      required: true,
    },
    asmThreatCompatible: {
      baseName: "asm_threat_compatible",
      type: "boolean",
      required: true,
    },
    backendWafEventCount: {
      baseName: "backend_waf_event_count",
      type: "number",
      required: true,
      format: "int64",
    },
    businessLogic: {
      baseName: "business_logic",
      type: "Array<string>",
      required: true,
    },
    color: {
      baseName: "color",
      type: "string",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    eventCount: {
      baseName: "event_count",
      type: "number",
      required: true,
      format: "int64",
    },
    eventTrend: {
      baseName: "event_trend",
      type: "Array<number>",
      required: true,
    },
    hasAppsecEnabled: {
      baseName: "has_appsec_enabled",
      type: "boolean",
      required: true,
    },
    hits: {
      baseName: "hits",
      type: "number",
      required: true,
      format: "int64",
    },
    iastProductActivation: {
      baseName: "iast_product_activation",
      type: "boolean",
      required: true,
    },
    iastProductCompatibility: {
      baseName: "iast_product_compatibility",
      type: "string",
      required: true,
    },
    iastProductCompatibilityReasons: {
      baseName: "iast_product_compatibility_reasons",
      type: "Array<string>",
      required: true,
    },
    languages: {
      baseName: "languages",
      type: "Array<string>",
      required: true,
    },
    lastIngestedSpans: {
      baseName: "last_ingested_spans",
      type: "number",
      required: true,
      format: "int64",
    },
    rcCapabilities: {
      baseName: "rc_capabilities",
      type: "Array<string>",
      required: true,
    },
    recommendedBusinessLogic: {
      baseName: "recommended_business_logic",
      type: "Array<string>",
      required: true,
    },
    riskProductActivation: {
      baseName: "risk_product_activation",
      type: "boolean",
      required: true,
    },
    riskProductCompatibility: {
      baseName: "risk_product_compatibility",
      type: "string",
      required: true,
    },
    riskProductCompatibilityReasons: {
      baseName: "risk_product_compatibility_reasons",
      type: "Array<string>",
      required: true,
    },
    rulesVersion: {
      baseName: "rules_version",
      type: "Array<string>",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    signalCount: {
      baseName: "signal_count",
      type: "number",
      required: true,
      format: "int64",
    },
    signalTrend: {
      baseName: "signal_trend",
      type: "Array<number>",
      required: true,
    },
    source: {
      baseName: "source",
      type: "Array<string>",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
      required: true,
    },
    tracerVersions: {
      baseName: "tracer_versions",
      type: "Array<string>",
      required: true,
    },
    vmActivation: {
      baseName: "vm-activation",
      type: "string",
      required: true,
    },
    vulnCriticalCount: {
      baseName: "vuln_critical_count",
      type: "number",
      required: true,
      format: "int64",
    },
    vulnHighCount: {
      baseName: "vuln_high_count",
      type: "number",
      required: true,
      format: "int64",
    },
    withoutFilterServices: {
      baseName: "without_filter_services",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationSecurityServiceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
