/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { STIXIndicatorType } from "./STIXIndicatorType";
import { STIXPatternType } from "./STIXPatternType";
import { STIXSpecVersion } from "./STIXSpecVersion";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A STIX 2.1 indicator object.
 */
export class STIXIndicatorObject {
  /**
   * The confidence in the correctness of the indicator, from 0 through 100.
   */
  "confidence"?: number;
  /**
   * The time when the indicator was created.
   */
  "created": Date;
  /**
   * Optional external reference metadata preserved with the indicator but not interpreted during ingestion.
   */
  "externalReferences"?: Array<{ [key: string]: any }>;
  /**
   * The STIX indicator identifier.
   */
  "id": string;
  /**
   * The open vocabulary terms that categorize the indicator.
   */
  "indicatorTypes"?: Array<string>;
  /**
   * Optional kill chain metadata preserved with the indicator but not interpreted during ingestion.
   */
  "killChainPhases"?: Array<{ [key: string]: any }>;
  /**
   * Labels associated with the indicator.
   */
  "labels"?: Array<string>;
  /**
   * The time when the indicator was last modified.
   */
  "modified": Date;
  /**
   * References to marking definition objects that apply to the indicator.
   */
  "objectMarkingRefs"?: Array<string>;
  /**
   * The STIX pattern that identifies the observable.
   */
  "pattern": string;
  /**
   * The supported STIX pattern language.
   */
  "patternType": STIXPatternType;
  /**
   * Whether the indicator has been revoked.
   */
  "revoked"?: boolean;
  /**
   * The supported STIX specification version.
   */
  "specVersion": STIXSpecVersion;
  /**
   * The STIX object type for an indicator.
   */
  "type": STIXIndicatorType;
  /**
   * The time from which the indicator is considered valid.
   */
  "validFrom": Date;
  /**
   * The time until which the indicator is considered valid.
   */
  "validUntil"?: Date;

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
    confidence: {
      baseName: "confidence",
      type: "number",
      format: "int32",
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    externalReferences: {
      baseName: "external_references",
      type: "Array<{ [key: string]: any; }>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    indicatorTypes: {
      baseName: "indicator_types",
      type: "Array<string>",
    },
    killChainPhases: {
      baseName: "kill_chain_phases",
      type: "Array<{ [key: string]: any; }>",
    },
    labels: {
      baseName: "labels",
      type: "Array<string>",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    objectMarkingRefs: {
      baseName: "object_marking_refs",
      type: "Array<string>",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
      required: true,
    },
    patternType: {
      baseName: "pattern_type",
      type: "STIXPatternType",
      required: true,
    },
    revoked: {
      baseName: "revoked",
      type: "boolean",
    },
    specVersion: {
      baseName: "spec_version",
      type: "STIXSpecVersion",
      required: true,
    },
    type: {
      baseName: "type",
      type: "STIXIndicatorType",
      required: true,
    },
    validFrom: {
      baseName: "valid_from",
      type: "Date",
      required: true,
      format: "date-time",
    },
    validUntil: {
      baseName: "valid_until",
      type: "Date",
      format: "date-time",
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
    return STIXIndicatorObject.attributeTypeMap;
  }

  public constructor() {}
}
