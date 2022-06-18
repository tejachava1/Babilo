Drop Database BabiloDB
GO

CREATE DATABASE BabiloDB
GO

USE [BabiloDB]
GO
/****** Object:  Table [dbo].[Admin_Registration]    Script Date: 16-06-2022 08:32:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin_Registration](
	[adminId] [int] IDENTITY(1,1) NOT NULL,
	[password] [varchar](18) NOT NULL,
	[name] [varchar](20) NOT NULL,
	[EmailId] [varchar](50) NOT NULL,
	[phoneNumber] [varchar](20) NULL,
 CONSTRAINT [PK_Admin_REGISTRATION] PRIMARY KEY CLUSTERED
(
	[adminId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Auditorium_Registration]    Script Date: 16-06-2022 08:32:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Auditorium_Registration](
	[auditoriumId] [int] NOT NULL,
	[auditoriumName] [varchar](18) NOT NULL,
	[auditoriumLocation] [varchar](20) NOT NULL,
	[movieId] [varchar](50) NOT NULL,
	[seatAvailable] [int] NULL,
 CONSTRAINT [PK_Auditorium_REGISTRATION] PRIMARY KEY CLUSTERED
(
	[auditoriumId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie_Registration]    Script Date: 16-06-2022 08:32:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie_Registration](
	[movieId] [int] IDENTITY(1,1) NOT NULL,
	[movieName] [varchar](18) NOT NULL,
	[movieDirector] [varchar](20) NULL,
	[movieDescription] [varchar](100) NULL,
	[movieRating] [int] NULL,
	[moviePrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Movie_REGISTRATION] PRIMARY KEY CLUSTERED
(
	[movieId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedule]    Script Date: 16-06-2022 08:32:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedule](
	[scheduleId] [int] IDENTITY(1,1) NOT NULL,
	[theaterId] [int] NOT NULL,
	[movieId] [int] NOT NULL,
	[time] [varchar](18) NOT NULL,
	[date] [datetime] NULL,
	[seatAvailable] [int] NULL,
 CONSTRAINT [PK_schedule] PRIMARY KEY CLUSTERED
(
	[scheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Theater_Registration]    Script Date: 16-06-2022 08:32:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Theater_Registration](
	[theaterId] [int] IDENTITY(1,1) NOT NULL,
	[theaterName] [varchar](18) NOT NULL,
	[theaterLocation] [varchar](20) NOT NULL,
 CONSTRAINT [PK_Theater_REGISTRATION] PRIMARY KEY CLUSTERED
(
	[theaterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Registration]    Script Date: 16-06-2022 08:32:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Registration](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[password] [varchar](18) NOT NULL,
	[name] [varchar](20) NOT NULL,
	[EmailId] [varchar](50) NOT NULL,
	[phoneNumber] [varchar](20) NULL,
 CONSTRAINT [PK_User_REGISTRATION] PRIMARY KEY CLUSTERED
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
