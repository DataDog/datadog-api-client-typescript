import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationTemplateDataRelationshipsCreatedByUser } from "./DegradationTemplateDataRelationshipsCreatedByUser";
import { DegradationTemplateDataRelationshipsLastModifiedByUser } from "./DegradationTemplateDataRelationshipsLastModifiedByUser";
import { DegradationTemplateDataRelationshipsStatusPage } from "./DegradationTemplateDataRelationshipsStatusPage";

/**
 * The relationships of a degradation template.
 */
export class DegradationTemplateDataRelationships {
  /**
   * The Datadog user who created the degradation template.
   */
  "createdByUser"?: DegradationTemplateDataRelationshipsCreatedByUser;
  /**
   * The Datadog user who last modified the degradation template.
   */
  "lastModifiedByUser"?: DegradationTemplateDataRelationshipsLastModifiedByUser;
  /**
   * The status page the degradation template belongs to.
   */
  "statusPage"?: DegradationTemplateDataRelationshipsStatusPage;
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
    createdByUser: {
      baseName: "created_by_user",
      type: "DegradationTemplateDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "DegradationTemplateDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "DegradationTemplateDataRelationshipsStatusPage",
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
    return DegradationTemplateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
