import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCGeoLocation } from "./IoCGeoLocation";
import { IoCScoreEffect } from "./IoCScoreEffect";
import { IoCSignalSeverityCount } from "./IoCSignalSeverityCount";
import { IoCSource } from "./IoCSource";

/**
 * An indicator of compromise with extended context from your environment.
 */
export class IoCIndicatorDetailed {
  /**
   * Additional domain-specific context from threat intelligence sources.
   */
  "additionalData"?: { [key: string]: any };
  /**
   * Autonomous system CIDR block.
   */
  "asCidrBlock"?: string;
  /**
   * Geographic location information for an IP indicator.
   */
  "asGeo"?: IoCGeoLocation;
  /**
   * Autonomous system number.
   */
  "asNumber"?: string;
  /**
   * Autonomous system organization name.
   */
  "asOrganization"?: string;
  /**
   * Autonomous system type.
   */
  "asType"?: string;
  /**
   * Threat intelligence sources that flagged this indicator as benign.
   */
  "benignSources"?: Array<IoCSource>;
  /**
   * Threat categories associated with the indicator.
   */
  "categories"?: Array<string>;
  /**
   * Critical assets associated with this indicator.
   */
  "criticalAssets"?: Array<string>;
  /**
   * Timestamp when the indicator was first seen.
   */
  "firstSeen"?: Date;
  /**
   * Hosts associated with this indicator.
   */
  "hosts"?: Array<string>;
  /**
   * Unique identifier for the indicator.
   */
  "id"?: string;
  /**
   * The indicator value (for example, an IP address or domain).
   */
  "indicator"?: string;
  /**
   * Type of indicator (for example, IP address or domain).
   */
  "indicatorType"?: string;
  /**
   * Timestamp when the indicator was last seen.
   */
  "lastSeen"?: Date;
  /**
   * Number of logs that matched this indicator.
   */
  "logMatches"?: number;
  /**
   * Log sources where this indicator was observed.
   */
  "logSources"?: Array<string>;
  /**
   * Effect of a scoring factor on the indicator's threat score.
   */
  "mAsType"?: IoCScoreEffect;
  /**
   * Effect of a scoring factor on the indicator's threat score.
   */
  "mPersistence"?: IoCScoreEffect;
  /**
   * Effect of a scoring factor on the indicator's threat score.
   */
  "mSignal"?: IoCScoreEffect;
  /**
   * Effect of a scoring factor on the indicator's threat score.
   */
  "mSources"?: IoCScoreEffect;
  /**
   * Threat intelligence sources that flagged this indicator as malicious.
   */
  "maliciousSources"?: Array<IoCSource>;
  /**
   * Effect of a scoring factor on the indicator's threat score.
   */
  "maxTrustScore"?: IoCScoreEffect;
  /**
   * Threat score for the indicator (0-100).
   */
  "score"?: number;
  /**
   * Services where this indicator was observed.
   */
  "services"?: Array<string>;
  /**
   * Number of security signals that matched this indicator.
   */
  "signalMatches"?: number;
  /**
   * Breakdown of security signals by severity.
   */
  "signalSeverity"?: Array<IoCSignalSeverityCount>;
  /**
   * Signal tier level.
   */
  "signalTier"?: number;
  /**
   * Threat intelligence sources that flagged this indicator as suspicious.
   */
  "suspiciousSources"?: Array<IoCSource>;
  /**
   * Tags associated with the indicator.
   */
  "tags"?: Array<string>;
  /**
   * Users associated with this indicator, grouped by category.
   */
  "users"?: { [key: string]: Array<string> };
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
    additionalData: {
      baseName: "additional_data",
      type: "{ [key: string]: any; }",
    },
    asCidrBlock: {
      baseName: "as_cidr_block",
      type: "string",
    },
    asGeo: {
      baseName: "as_geo",
      type: "IoCGeoLocation",
    },
    asNumber: {
      baseName: "as_number",
      type: "string",
    },
    asOrganization: {
      baseName: "as_organization",
      type: "string",
    },
    asType: {
      baseName: "as_type",
      type: "string",
    },
    benignSources: {
      baseName: "benign_sources",
      type: "Array<IoCSource>",
    },
    categories: {
      baseName: "categories",
      type: "Array<string>",
    },
    criticalAssets: {
      baseName: "critical_assets",
      type: "Array<string>",
    },
    firstSeen: {
      baseName: "first_seen",
      type: "Date",
      format: "date-time",
    },
    hosts: {
      baseName: "hosts",
      type: "Array<string>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    indicator: {
      baseName: "indicator",
      type: "string",
    },
    indicatorType: {
      baseName: "indicator_type",
      type: "string",
    },
    lastSeen: {
      baseName: "last_seen",
      type: "Date",
      format: "date-time",
    },
    logMatches: {
      baseName: "log_matches",
      type: "number",
      format: "int64",
    },
    logSources: {
      baseName: "log_sources",
      type: "Array<string>",
    },
    mAsType: {
      baseName: "m_as_type",
      type: "IoCScoreEffect",
    },
    mPersistence: {
      baseName: "m_persistence",
      type: "IoCScoreEffect",
    },
    mSignal: {
      baseName: "m_signal",
      type: "IoCScoreEffect",
    },
    mSources: {
      baseName: "m_sources",
      type: "IoCScoreEffect",
    },
    maliciousSources: {
      baseName: "malicious_sources",
      type: "Array<IoCSource>",
    },
    maxTrustScore: {
      baseName: "max_trust_score",
      type: "IoCScoreEffect",
    },
    score: {
      baseName: "score",
      type: "number",
      format: "double",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    signalMatches: {
      baseName: "signal_matches",
      type: "number",
      format: "int64",
    },
    signalSeverity: {
      baseName: "signal_severity",
      type: "Array<IoCSignalSeverityCount>",
    },
    signalTier: {
      baseName: "signal_tier",
      type: "number",
      format: "int64",
    },
    suspiciousSources: {
      baseName: "suspicious_sources",
      type: "Array<IoCSource>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    users: {
      baseName: "users",
      type: "{ [key: string]: Array<string>; }",
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
    return IoCIndicatorDetailed.attributeTypeMap;
  }

  public constructor() {}
}
