import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCGeoLocation } from "./IoCGeoLocation";
import { IoCScoreEffect } from "./IoCScoreEffect";
import { IoCSource } from "./IoCSource";

/**
 * An indicator of compromise with threat intelligence data.
 */
export class IoCIndicator {
  /**
   * Geographic location information for an IP indicator.
   */
  "asGeo"?: IoCGeoLocation;
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
   * Timestamp when the indicator was first seen.
   */
  "firstSeen"?: Date;
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
   * Number of security signals that matched this indicator.
   */
  "signalMatches"?: number;
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
    asGeo: {
      baseName: "as_geo",
      type: "IoCGeoLocation",
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
    firstSeen: {
      baseName: "first_seen",
      type: "Date",
      format: "date-time",
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
    signalMatches: {
      baseName: "signal_matches",
      type: "number",
      format: "int64",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IoCIndicator.attributeTypeMap;
  }

  public constructor() {}
}
