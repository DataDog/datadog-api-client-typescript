import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGroupFindings } from "./RemediationGroupFindings";
import { RemediationGroupImageUpdate } from "./RemediationGroupImageUpdate";
import { RemediationGroupPackageUpdate } from "./RemediationGroupPackageUpdate";

/**
 * Attributes of a remediation group. Each group includes one kind object, `package_update` or `image_update`,
 * depending on its grouping definition.
 */
export class RemediationGroupAttributes {
  /**
   * Counts of the group's open findings. The counts include every finding in the group, including findings that
   * don't match `filter[query]`.
   */
  "findings": RemediationGroupFindings;
  /**
   * Grouping definition that formed the group: `sca.package_update` or `cloudvm.image_update`.
   */
  "groupingDefinitionId": string;
  /**
   * An image or package to upgrade, for a group of host and container vulnerabilities (`cloudvm.image_update`).
   * The group gathers the open vulnerabilities of running production images that have a fix available, and groups
   * them by `grouping_location`, `remediation_kind`, and `action`.
   */
  "imageUpdate"?: RemediationGroupImageUpdate;
  /**
   * A package to update in a repository, for a group of library vulnerabilities (`sca.package_update`). The group
   * gathers the open vulnerabilities of direct dependencies that have a recommended fix, and groups them by
   * `@git.repository_id`, `@vulnerability.stack.ecosystem`, and `@remediation.recommended.name`.
   */
  "packageUpdate"?: RemediationGroupPackageUpdate;
  /**
   * Title of the group, which describes the change to make.
   */
  "title": string;
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
    findings: {
      baseName: "findings",
      type: "RemediationGroupFindings",
      required: true,
    },
    groupingDefinitionId: {
      baseName: "grouping_definition_id",
      type: "string",
      required: true,
    },
    imageUpdate: {
      baseName: "image_update",
      type: "RemediationGroupImageUpdate",
    },
    packageUpdate: {
      baseName: "package_update",
      type: "RemediationGroupPackageUpdate",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return RemediationGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
