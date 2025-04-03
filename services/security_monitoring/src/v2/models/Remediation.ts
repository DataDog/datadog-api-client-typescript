import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Advisory } from "./Advisory";

/**
 * Vulnerability remediation.
 */
export class Remediation {
  /**
   * Whether the vulnerability can be resolved when recompiling the package or not.
   */
  "autoSolvable": boolean;
  /**
   * Avoided advisories.
   */
  "avoidedAdvisories": Array<Advisory>;
  /**
   * Remediation fixed advisories.
   */
  "fixedAdvisories": Array<Advisory>;
  /**
   * Library name remediating the vulnerability.
   */
  "libraryName": string;
  /**
   * Library version remediating the vulnerability.
   */
  "libraryVersion": string;
  /**
   * New advisories.
   */
  "newAdvisories": Array<Advisory>;
  /**
   * Remaining advisories.
   */
  "remainingAdvisories": Array<Advisory>;
  /**
   * Remediation type.
   */
  "type": string;
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
    autoSolvable: {
      baseName: "auto_solvable",
      type: "boolean",
      required: true,
    },
    avoidedAdvisories: {
      baseName: "avoided_advisories",
      type: "Array<Advisory>",
      required: true,
    },
    fixedAdvisories: {
      baseName: "fixed_advisories",
      type: "Array<Advisory>",
      required: true,
    },
    libraryName: {
      baseName: "library_name",
      type: "string",
      required: true,
    },
    libraryVersion: {
      baseName: "library_version",
      type: "string",
      required: true,
    },
    newAdvisories: {
      baseName: "new_advisories",
      type: "Array<Advisory>",
      required: true,
    },
    remainingAdvisories: {
      baseName: "remaining_advisories",
      type: "Array<Advisory>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Remediation.attributeTypeMap;
  }

  public constructor() {}
}
