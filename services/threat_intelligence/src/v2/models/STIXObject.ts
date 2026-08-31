import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { STIXPatternType } from "./STIXPatternType";

/**
 * A STIX 2.1 object. Indicator objects are processed and ingested; all other STIX object types are ignored and are not included in the response counters.
 */
export class STIXObject {
  /**
   * The confidence in the correctness of the indicator, from 0 through 100.
   */
  "confidence"?: number;
  /**
   * The time when the object was created.
   */
  "created"?: Date;
  /**
   * Optional external reference metadata preserved with the indicator but not interpreted during ingestion.
   */
  "externalReferences"?: Array<{ [key: string]: any }>;
  /**
   * The STIX object identifier.
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
   * The time when the object was last modified.
   */
  "modified"?: Date;
  /**
   * References to marking definition objects that apply to the indicator.
   */
  "objectMarkingRefs"?: Array<string>;
  /**
   * The STIX pattern that identifies the observable. Present on indicator objects.
   */
  "pattern"?: string;
  /**
   * The supported STIX pattern language.
   */
  "patternType"?: STIXPatternType;
  /**
   * Whether the indicator has been revoked.
   */
  "revoked"?: boolean;
  /**
   * The STIX specification version declared on the object. Objects with an unsupported version are accepted and counted in the `unsupported` response counter.
   */
  "specVersion"?: string;
  /**
   * The STIX object type.
   */
  "type": string;
  /**
   * The time from which the indicator is considered valid. Present on indicator objects.
   */
  "validFrom"?: Date;
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
      format: "date-time",
    },
    objectMarkingRefs: {
      baseName: "object_marking_refs",
      type: "Array<string>",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    patternType: {
      baseName: "pattern_type",
      type: "STIXPatternType",
    },
    revoked: {
      baseName: "revoked",
      type: "boolean",
    },
    specVersion: {
      baseName: "spec_version",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    validFrom: {
      baseName: "valid_from",
      type: "Date",
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
    return STIXObject.attributeTypeMap;
  }

  public constructor() {}
}
