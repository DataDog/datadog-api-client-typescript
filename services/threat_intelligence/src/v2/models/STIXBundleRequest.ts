import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { STIXBundleType } from "./STIXBundleType";
import { STIXObject } from "./STIXObject";
import { STIXSpecVersion } from "./STIXSpecVersion";

/**
 * A STIX 2.1 bundle containing threat intelligence indicator objects.
 */
export class STIXBundleRequest {
  /**
   * The STIX bundle identifier.
   */
  "id": string;
  /**
   * The STIX objects included in the bundle. Indicator objects are processed and ingested; other STIX object types are accepted and counted in the `unsupported` response counter.
   */
  "objects": Array<STIXObject>;
  /**
   * The supported STIX specification version.
   */
  "specVersion"?: STIXSpecVersion;
  /**
   * The STIX object type for a bundle.
   */
  "type": STIXBundleType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    objects: {
      baseName: "objects",
      type: "Array<STIXObject>",
      required: true,
    },
    specVersion: {
      baseName: "spec_version",
      type: "STIXSpecVersion",
    },
    type: {
      baseName: "type",
      type: "STIXBundleType",
      required: true,
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
    return STIXBundleRequest.attributeTypeMap;
  }

  public constructor() {}
}
