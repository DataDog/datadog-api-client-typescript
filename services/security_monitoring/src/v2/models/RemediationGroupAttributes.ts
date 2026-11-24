import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGroupFindings } from "./RemediationGroupFindings";
import { RemediationGroupOwners } from "./RemediationGroupOwners";
import { RemediationGroupPackageUpdate } from "./RemediationGroupPackageUpdate";

/**
 * Attributes of a remediation group. Each group includes one kind object, depending on its grouping definition.
 */
export class RemediationGroupAttributes {
  /**
   * Counts of the group's open findings. The counts include every finding in the group, including findings that
   * don't match `filter[query]`.
   */
  "findings": RemediationGroupFindings;
  /**
   * Grouping definition that formed the group, such as `sca.package_update`.
   */
  "groupingDefinitionId": string;
  /**
   * Who should fix the group: the code owners of the group's findings, from their `@git.codeowners` attribute,
   * and their Datadog teams, from their `team` tag. A group with no owners has empty `items` and a `total` of 0.
   */
  "owners": RemediationGroupOwners;
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
    owners: {
      baseName: "owners",
      type: "RemediationGroupOwners",
      required: true,
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
