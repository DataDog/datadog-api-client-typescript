import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateOrUpdateWidgetRequestAttributes } from "./CreateOrUpdateWidgetRequestAttributes";
import { CreateOrUpdateWidgetRequestJSONAPIRequestDocument } from "./CreateOrUpdateWidgetRequestJSONAPIRequestDocument";
import { CreateOrUpdateWidgetRequestResourceObjectRequest } from "./CreateOrUpdateWidgetRequestResourceObjectRequest";
import { Definition } from "./Definition";
import { ErrorLinks } from "./ErrorLinks";
import { ErrorSource } from "./ErrorSource";
import { LinkObject } from "./LinkObject";
import { ResourceIdentifierObject } from "./ResourceIdentifierObject";
import { WidgetErrorInput } from "./WidgetErrorInput";
import { WidgetLinks } from "./WidgetLinks";
import { WidgetRelationshipObjectInput } from "./WidgetRelationshipObjectInput";
import { WidgetRelationshipObjectOutput } from "./WidgetRelationshipObjectOutput";
import { WidgetResourceObjectInput } from "./WidgetResourceObjectInput";
import { WidgetResourceObjectOutput } from "./WidgetResourceObjectOutput";
import { WidgetSchemaAttributes } from "./WidgetSchemaAttributes";
import { WidgetSchemaJSONAPIDocument } from "./WidgetSchemaJSONAPIDocument";
import { WidgetSchemaJSONAPIListDocument } from "./WidgetSchemaJSONAPIListDocument";
import { WidgetSchemaResource } from "./WidgetSchemaResource";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    WidgetExperienceType: [
      "ccm_reports",
      "logs_reports",
      "csv_reports",
      "product_analytics",
    ],
    WidgetType: [
      "bar_chart",
      "change",
      "cloud_cost_summary",
      "cohort",
      "funnel",
      "geomap",
      "list_stream",
      "query_table",
      "query_value",
      "retention_curve",
      "sankey",
      "sunburst",
      "timeseries",
      "toplist",
      "treemap",
    ],
  },
  oneOfMap: {
    ErrorLinksAbout: ["string", "LinkObject"],
    LinksDescribedBy: ["string", "LinkObject"],
    LinksFirst: ["string", "LinkObject"],
    LinksLast: ["string", "LinkObject"],
    LinksNext: ["string", "LinkObject"],
    LinksPrev: ["string", "LinkObject"],
    LinksRelated: ["string", "LinkObject"],
    LinksSelf: ["string", "LinkObject"],
    RelationshipObjectOutputData: [
      "ResourceIdentifierObject",
      "Array<ResourceIdentifierObject>",
    ],
    ResourceObjectInputAttributes: ["{ [key: string]: any; }", "any"],
    ResourceObjectOutputAttributes: ["{ [key: string]: any; }", "any"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateOrUpdateWidgetRequestAttributes:
      CreateOrUpdateWidgetRequestAttributes,
    CreateOrUpdateWidgetRequestJSONAPIRequestDocument:
      CreateOrUpdateWidgetRequestJSONAPIRequestDocument,
    CreateOrUpdateWidgetRequestResourceObjectRequest:
      CreateOrUpdateWidgetRequestResourceObjectRequest,
    Definition: Definition,
    ErrorLinks: ErrorLinks,
    ErrorSource: ErrorSource,
    LinkObject: LinkObject,
    ResourceIdentifierObject: ResourceIdentifierObject,
    WidgetErrorInput: WidgetErrorInput,
    WidgetLinks: WidgetLinks,
    WidgetRelationshipObjectInput: WidgetRelationshipObjectInput,
    WidgetRelationshipObjectOutput: WidgetRelationshipObjectOutput,
    WidgetResourceObjectInput: WidgetResourceObjectInput,
    WidgetResourceObjectOutput: WidgetResourceObjectOutput,
    WidgetSchemaAttributes: WidgetSchemaAttributes,
    WidgetSchemaJSONAPIDocument: WidgetSchemaJSONAPIDocument,
    WidgetSchemaJSONAPIListDocument: WidgetSchemaJSONAPIListDocument,
    WidgetSchemaResource: WidgetSchemaResource,
  },
};
