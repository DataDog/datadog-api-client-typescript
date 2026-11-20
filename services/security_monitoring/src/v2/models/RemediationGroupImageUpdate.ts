import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An image or package to upgrade, for a group of host and container vulnerabilities (`cloudvm.image_update`).
 * The group gathers the open vulnerabilities of running production images that have a fix available, and groups
 * them by `grouping_location`, `remediation_kind`, and `action`.
 */
export class RemediationGroupImageUpdate {
  /**
   * Name of the container image, base image, or package to upgrade. The value comes from the first of these
   * attributes that the findings have: `@remediation.container_image.latest_major.name`,
   * `@remediation.base_image.latest_major.name`, or `@remediation.recommended.name`.
   */
  "action": string;
  /**
   * Number of distinct values of `@advisory.id` across the group's findings.
   */
  "advisoryCount": number;
  /**
   * Number of distinct values of `@advisory.id` across the group's findings that have
   * `@risk.has_exploit_available` set to `true`.
   */
  "exploitableCveCount": number;
  /**
   * Number of distinct values of `@code_location.filename` across the group's findings.
   */
  "fileCount": number;
  /**
   * File that contains the findings, from their `@code_location.filename` attribute. When no file is known,
   * the value is the findings' `@container_image.name`.
   */
  "groupingLocation": string;
  /**
   * Whether `grouping_location` is a `@code_location.filename` rather than a `@container_image.name`.
   */
  "locationIsFilename": boolean;
  /**
   * Kind of upgrade: `image_update` when the findings have a `@remediation.container_image.latest_major.name`,
   * `base_image_bump` when they have `@vulnerability.is_inherited_from_base_image` set to `true`, and
   * `package_update` otherwise.
   */
  "remediationKind": string;
  /**
   * Version to upgrade to: the `@remediation.container_image.latest_major.tag` or
   * `@remediation.base_image.latest_major.tag` of the image in `action`, or else the highest
   * `@remediation.recommended.version` across the group's findings. Omitted when no version is recommended
   * or when the recommended versions can't be ordered.
   */
  "targetVersion"?: string;
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
    action: {
      baseName: "action",
      type: "string",
      required: true,
    },
    advisoryCount: {
      baseName: "advisory_count",
      type: "number",
      required: true,
      format: "int64",
    },
    exploitableCveCount: {
      baseName: "exploitable_cve_count",
      type: "number",
      required: true,
      format: "int64",
    },
    fileCount: {
      baseName: "file_count",
      type: "number",
      required: true,
      format: "int64",
    },
    groupingLocation: {
      baseName: "grouping_location",
      type: "string",
      required: true,
    },
    locationIsFilename: {
      baseName: "location_is_filename",
      type: "boolean",
      required: true,
    },
    remediationKind: {
      baseName: "remediation_kind",
      type: "string",
      required: true,
    },
    targetVersion: {
      baseName: "target_version",
      type: "string",
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
    return RemediationGroupImageUpdate.attributeTypeMap;
  }

  public constructor() {}
}
